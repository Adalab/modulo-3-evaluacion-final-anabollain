import React from 'react';
//react libraries
import {useState, useEffect} from 'react';
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
//routes
import {Routes, Route} from 'react-router-dom';
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
  //FilterBySpecies input
  const [inputSpecies, setInputSpecies] = useState(ls.get('speciesInput', ''));
  //FilterByStatus input
  const [inputStatus, setInputStatus] = useState(ls.get('statusInput', 'all'));
  //Tools
  //Flag to get fetch status and a loader while waiting for the response
  const [isLoading, setIsLoading] = useState(true);


  //USE EFFECT
  useEffect (()=> {
    callToApi().then ((data) => {
      setDataCharacters(data);
      setIsLoading(false);
    });
  }, []);


  //EVENT FUNCTIONS
  //Filters
  //Lifting function to get name input information from user
  const handleNameInput = (value) => {
    setInputName(value);
    ls.set('nameInput', value);
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
    //setFoundCharacter(foundCharacter);
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
    .filter((eachData) => inputStatus === 'all' ? true : eachData.status.toLowerCase() === inputStatus.toLowerCase());
  };

  //RETURN
  if (isLoading === false){
    return (
      <>
        <Header />
        <Routes>
          <Route path='/' element={
            <main>
              <Filters inputName={inputName} handleNameInput={handleNameInput} inputSpecies={inputSpecies} handleSpeciesInput={handleSpeciesInput} inputStatus={inputStatus} handleStatusInput={handleStatusInput} handleResetBtn={handleResetBtn}/>
              <CharacterList dataCharacters={filteredCharacters()} inputName={inputName}/>
            </main>
          }
          />
          <Route path='/character/:id' element={<CharacterDetail findCharacter={findCharacter}/>}/>
          <Route path='*' element={<NotFoundPage/>}/>
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
