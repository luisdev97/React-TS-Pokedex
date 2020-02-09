import React from 'react';
import './App.css';
import Header from './components/Header';
import PokemonList from './components/PokemonList/PokemonList';
import DetailBox from './components/DetailBox';
import pokedex from '../src/pokedex3.png';

const App = () => {
  return (
    <div className="App">
        <Header/>
        <div className="row">
          <div className="container mt-5">
            <img src={ pokedex } alt="imagen"/>
          </div>
        </div>

    </div>
    
  );
}

export default App;
