import React, { useEffect } from 'react';
import './index.css';



const PokemonImage = ({ sprites } : PokemonImageProps) => {
   console.log(sprites);
    return (
        <div className="imageContainer">
            <img src="" alt=""/>
        </div>
    );
};

type PokemonImageProps = {
    sprites: {}
}

export default PokemonImage;