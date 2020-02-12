import React, { useState, useEffect } from 'react';
import pokedex from './../pokedex3.png';

const Pokedex = () => {

  const [ selectedPokemon, setSelectedPokemon ] = useState('Bulbasaur');

  useEffect(() => {
    console.log(selectedPokemon);
  },[selectedPokemon])

  return (
    <div className="row">
      <div className="container mt-5">
         <img src={ pokedex } alt="imagen" useMap="#pokedex"/>


         <map name="pokedex">

            <area shape="RECTANGLE" alt="crucetaSuperior" coords="277, 397, 300, 426" onClick={() => setSelectedPokemon('cruceta superior')}/>
            
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
