import axios from 'axios';


class PokemonService {

    private static END_POINT: string = "https://pokeapi.co/api/v2/pokemon/";

    public static getPokemonList(){

    }
    
    public static async getPokemon(pokemonName: string){
        const pokemon = await axios.get(this.END_POINT + pokemonName);
        console.log(pokemon);
    }

}

export default PokemonService;