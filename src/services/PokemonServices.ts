import axios from 'axios';
import Pokemon from '../models/Pokemon';



class PokemonService {

    private static END_POINT: string = "https://pokeapi.co/api/v2/pokemon/";

    public static getPokemonList(){

    }
    
    public static async getPokemon(idPokemon: number): Promise<Pokemon>{
        console.log(idPokemon);
        const res: Object = await axios.get(this.END_POINT + idPokemon);
        const pokemon: Pokemon = this.transformPokemonData(res);
        console.log(pokemon);
        return pokemon;
    }

    public static transformPokemonData(data: any): any {
        const { id, order, name, types, weight, abilities } = data.data;
        return {
            id,
            order,
            name,
            types,
            weight,
            abilities
        } 
    }

}

export default PokemonService;