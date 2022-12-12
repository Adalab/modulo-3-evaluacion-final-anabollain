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
  //Clicked detail character responding to each url
  const [foundCharacter, setFoundCharacter] = useState('');

  //USE EFFECT
  useEffect (()=> {
    callToApi().then ((data) => {
      setDataCharacters(data);
    });
  }, []);

  //EVENT FUNCTIONS
  //Lifting function to get name input information from user
  const handleNameInput = (value) => {
    setInputName(value);
  }
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
  };



  //RETURN
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={
          <main>
            <Filters inputName={inputName} handleNameInput={handleNameInput}/>
            <CharacterList dataCharacters={filteredCharacters()}/>
          </main>
        }
        />
        <Route path='/character/:id' element={<CharacterDetail findCharacter={findCharacter}/>}/>
      </Routes>
    </>
  );
}

export default App;
