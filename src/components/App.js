import React from 'react';
//react libraries
import {useState, useEffect} from 'react';
//routes
import {Routes, Route} from 'react-router-dom';
//props
//import PropTypes from 'prop-types';
//services
import callToApi from '../services/api';
import ls from '../services/localStorage';
//components
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Loading from './Loading';
import NotFoundPage from './NotFoundPage';
//styles
import '../styles/App.scss';

function App() {

  //STATE VARIABLES
  //Data
  //Character list to fill with returned data from API call
  const [dataCharacters, setDataCharacters] = useState ([]);
  //Filters
  //FilterByName input
  const [inputName, setInputName] = useState(ls.get('nameInput', ''));
  //FilterByEpisode input
  const [inputEpisode, setInputEpisode] = useState('');
  //FilterBySpecies input
  const [inputSpecies, setInputSpecies] = useState(ls.get('speciesInput', ''));
  //FilterByStatus input
  const [inputStatus, setInputStatus] = useState(ls.get('statusInput', 'all'));
  //Tools
  //Flag to get fetch status and a loader while waiting for the response
  const [isLoading, setIsLoading] = useState(true);
  //Background 
  const [background, setBackground] = useState('linear-gradient(rgba(14, 193, 220, 0.512), rgba(89, 222, 36, 0.589))');
  //Select body and add styles for background image
  document.body.style.backgroundImage = background;
  document.body.style.backgroundColor = 'rgba(255,255,255,0.6)';
  document.body.style.backgroundBlendMode = 'lighten';
  document.body.style.backgroundRepeat = 'no-repeat';
  document.body.style.backgroundSize = 'cover';
  

  //USE EFFECT
  useEffect (()=> {
    setTimeout(()=>{
      callToApi().then ((data) => {
        setDataCharacters(data);
        setIsLoading(false);
      });
    }, 100)
  }, []);

   //EVENT FUNCTIONS
  //Filters
  //Lifting function to get name input information from user
  const handleNameInput = (value) => {
    setInputName(value);
    ls.set('nameInput', value);
  }
  //Lifting function to get episodes input information from user
  const handleEpisodesInput = (value) => {
    setInputEpisode(value);
  }
  //Lifting function to get species select input information from user
  const handleSpeciesInput = (value) => {
    setInputSpecies(value);
    ls.set('speciesInput', value);
  }
  //Lifting function to get status radio input information from user
  const handleStatusInput = (value) => {
    setInputStatus(value);
    ls.set('statusInput', value);
  }
  //Card Detail
  //Function to find the character responding to the id of the selected url
  const findCharacter = (value) => {
    return dataCharacters.find((eachData) => parseInt(eachData.id) === parseInt(value));
  }
  //Reset button
  const handleResetBtn = () =>{
    //Empty or restore all inputs
    setInputName('');
    setInputStatus('all');
    setInputSpecies('');
    ls.remove('nameInput');
    ls.remove('speciesInput');
    ls.remove('statusInput');
  }

  //RENDER FUNCTIONS
  //Function with filters with each input value to get the array to be rendered
  const filteredCharacters = () => {
    return dataCharacters
    .filter((eachData) => eachData.name.toLowerCase().includes(inputName.toLowerCase()))
    .filter((eachData) => inputSpecies === '' ? true :  eachData.species.toLowerCase() === inputSpecies.toLowerCase())
    .filter((eachData) => inputStatus === 'all' ? true : eachData.status.toLowerCase() === inputStatus.toLowerCase())
    .filter((eachData) => inputEpisode === ''? true : eachData.episodes === parseInt(inputEpisode));;
  };
  //Change background image
  const handleBackground = (value) => {
    setBackground(value);
  };


 //RETURN
  if (isLoading === false){
    return (
      <>
        <Header handleBackground={handleBackground}/>
        <Routes>
          <Route path='/' element={
            <main>
              <Filters inputName={inputName} handleNameInput={handleNameInput} inputSpecies={inputSpecies} handleSpeciesInput={handleSpeciesInput} inputStatus={inputStatus} handleStatusInput={handleStatusInput} handleResetBtn={handleResetBtn} inputEpisode={inputEpisode} handleEpisodesInput={handleEpisodesInput}/>
              <CharacterList dataCharacters={filteredCharacters()} inputName={inputName} handleBackground={handleBackground}/>
            </main>
          }
          />
          <Route path='/character/:id' element={<CharacterDetail findCharacter={findCharacter} handleBackground={handleBackground}/>}/>
          <Route path='*' element={<NotFoundPage handleBackground={handleBackground} />}/>
        </Routes>
      </>
    );
  }else{
    return(
      <>
        <Loading/>
      </>
    );
  }
  
}

export default App;
