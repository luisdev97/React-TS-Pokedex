import React from 'react';
import './index.css';



const PokemonImage = ({ sprites } : PokemonImageProps) => {
    return (
        <div className="imageContainer">
            <img className="pokemonImage mb-2" src={sprites.front_default} alt=""/>
        </div>
    );
};

type PokemonImageProps = {
    sprites: any
}

export default PokemonImage;