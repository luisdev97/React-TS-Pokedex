import axios from 'axios';
import Pokemon from '../models/Pokemon';



class PokemonService {

    private static END_POINT: string = "https://pokeapi.co/api/v2/pokemon/";

    public static getPokemonList(){

    }
    
    public static async getPokemon(idPokemon: number): Promise<Pokemon>{
        console.log('pidiendo pokemon');
        const res: Object = await axios.get(this.END_POINT + idPokemon);
        const pokemon: Pokemon = this.transformPokemonData(res);
        return pokemon;
    }

    public static transformPokemonData(data: any): any {
        const { id, order, name, types, weight, abilities, sprites } = data.data;
        return {
            id,
            order,
            name,
            types,
            weight,
            abilities,
            sprites
        } 
    }

}

export default PokemonService;