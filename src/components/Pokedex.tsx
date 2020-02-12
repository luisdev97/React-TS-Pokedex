import React, { useState, useEffect } from 'react';
import PokemonImage from './PokemonImage/PokemonImage';
import pokedex from './../pokedex3.png';
import pokemonService from '../services/PokemonServices';

const Pokedex = () => {

  const [ selectedPokemon, setSelectedPokemon ] = useState('bulbasaur');

  useEffect(() => {
    pokemonService.getPokemon(selectedPokemon);
  },[selectedPokemon])

  return (
    <div className="row">
      <div className="container mt-5">
         <img src={ pokedex } alt="imagen" useMap="#pokedex"/>
         <PokemonImage/>

         <map name="pokedex">

            <area shape="RECTANGLE" alt="crucetaSuperior" coords="277, 397, 300, 426" onClick={() => setSelectedPokemon('charmander')}/>
            
            <area shape="RECTANGLE" alt="crucetaIzquierda" coords="245, 426, 277, 447" />

            <area shape="RECTANGLE" alt="crucetaInferior"coords="278, 448, 300, 480" />

            <area shape="RECTANGLE" alt="crucetaDerecha" coords="300, 426, 331, 449"/>

            <area shape="RECTANGLE" alt="botonRojo" coords="103, 402, 154, 409"/>

            <area shape="RECTANGLE" alt="botonAzul" coords="175, 402, 225, 409"/>

         </map>
      </div>
    </div>
  );
};

export default Pokedex;
