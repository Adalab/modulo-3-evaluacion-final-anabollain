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
//routes
import {Routes, Route} from 'react-router-dom';
//styles
import '../styles/App.scss';

function App() {

  //STATE VARIABLES
  const [dataCharacters, setDataCharacters] = useState ([]);

  //USE EFFECT
  useEffect (()=> {
    callToApi().then ((data) => {
      setDataCharacters(data);
    });
  }, []);

  //EVENT FUNCTIONS
  //RENDER FUNCTIONS
  //RETURN
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={
          <main>
            <Filters/>
            <CharacterList dataCharacters={dataCharacters}/>
          </main>
        }
        />
      </Routes>
    </>
  );
}

export default App;
