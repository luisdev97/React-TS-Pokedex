import React from 'react';
import Pokemon from '../../models/Pokemon';
import './index.css';

const PokemonDetail = ({ pokemon }: PokemonDetailProps) => {
    return (
        <div className="detailContainer">

                <div className="col mt-1 column" >
                    <div className="nameContainer">
                        <h2 className="text-white mt-4">{ pokemon.name }</h2>
                    </div>
                </div>

                <div className="col mt-1 column">
                    S
                </div>

                <div className="col mt-1 column">
                    S
                </div>

        </div>
    );
};

type PokemonDetailProps = {
    pokemon: Pokemon
}
export default PokemonDetail;

