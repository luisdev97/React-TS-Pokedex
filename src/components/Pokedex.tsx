import React, { useState, useEffect } from 'react';
import PokemonImage from './PokemonImage/PokemonImage';
import pokedex from './../pokedex3.png';
import pokemonService from '../services/PokemonServices';
import Pokemon from '../models/Pokemon';
import PokemonDetail from './PokemonDetail/PokemonDetail';


const Pokedex: React.FC = () => {

  const [ selectedPokemon, setSelectedPokemon ] = useState<number>(1);
  const [ pokemonData, setPokemonData ] = useState<Pokemon>({sprites: {}} as Pokemon);

  useEffect(() => {
    changeSelectedPokemon();
  },[selectedPokemon])

  const changeSelectedPokemon = () => {
    if(selectedPokemon < 1)
      setSelectedPokemon(1);
    else{
      pokemonService.getPokemon(selectedPokemon).then(res => {
        setPokemonData(res);
      });
    }
  }

  return (
    <div className="row">
      <div className="container mt-5">
         <img src={ pokedex } alt="imagen" useMap="#pokedex"/>
         <PokemonImage sprites={ pokemonData.sprites }/>
         <PokemonDetail pokemon={ pokemonData }/>

         <map name="pokedex">

            <area shape="RECTANGLE" alt="crucetaSuperior" coords="277, 397, 300, 426" onClick={() => setSelectedPokemon(selectedPokemon - 1)}/>
            
            <area shape="RECTANGLE" alt="crucetaIzquierda" coords="245, 426, 277, 447"/>

            <area shape="RECTANGLE" alt="crucetaInferior"coords="278, 448, 300, 480" onClick={() => setSelectedPokemon(selectedPokemon + 1)} />

            <area shape="RECTANGLE" alt="crucetaDerecha" coords="300, 426, 331, 449"/>

            <area shape="RECTANGLE" alt="botonRojo" coords="103, 402, 154, 409"/>

            <area shape="RECTANGLE" alt="botonAzul" coords="175, 402, 225, 409"/>

         </map>
      </div>
    </div>
  );
};

export default Pokedex;
