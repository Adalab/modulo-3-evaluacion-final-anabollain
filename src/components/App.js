import React from 'react';
//react libraries
import {useState, useEffect} from 'react';
//props
//import PropTypes from 'prop-types';
//services
import callToApi from '../services/api';
//import ls from '../services/localStorage';
//components
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Loading from './Loading';
//routes
import {Routes, Route} from 'react-router-dom';
//styles
import '../styles/App.scss';

function App() {

  //STATE VARIABLES
  //Character list to fill with returned data from API call
  const [dataCharacters, setDataCharacters] = useState ([]);
  //FilterByName input
  const [inputName, setInputName] = useState('');
  //FilterBySpecies input
  const [inputSpecies, setInputSpecies] = useState('');
  //Clicked detail character responding to each url
  //const [foundCharacter, setFoundCharacter] = useState('');
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
  }
  //Lifting function to get species select input information from user
  const handleSpeciesInput = (value) => {
    setInputSpecies(value);
  }
  
  //Card Detail
  //Function to find the character responding to the id of the selected url
  const findCharacter = (value) => {
    return dataCharacters.find((eachData) => parseInt(eachData.id) === parseInt(value));
    //setFoundCharacter(foundCharacter);
  }


  //RENDER FUNCTIONS
  //Function with filters with each input value to get the array to be rendered
  const filteredCharacters = () => {
    return dataCharacters
    .filter((eachData) => eachData.name.toLowerCase().includes(inputName.toLowerCase()))
    .filter((eachData)=> inputSpecies === '' ? true :  eachData.species.toLowerCase() === inputSpecies.toLowerCase())
  };

  //RETURN
  if (isLoading === false){
    return (
      <>
        <Header />
        <Routes>
          <Route path='/' element={
            <main>
              <Filters inputName={inputName} handleNameInput={handleNameInput} inputSpecies={inputSpecies} handleSpeciesInput={handleSpeciesInput}/>
              <CharacterList dataCharacters={filteredCharacters()} inputName={inputName}/>
            </main>
          }
          />
          <Route path='/character/:id' element={<CharacterDetail findCharacter={findCharacter}/>}/>
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
