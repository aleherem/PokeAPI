import { PokemonDetails } from "../Types/types";
import { formatPokemon } from "../utils/utils";

// https://pokeapi.co/api/v2/pokemon/charizard
export async function fetchPokemon(pokemonName: string): Promise<PokemonDetails> { 
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${formatPokemon(pokemonName)}`);

    if(!response.ok){
        throw new Error(`Error fetching ${pokemonName}`);
    }
    const result = await response.json();
    const pokemon = {
        name: result.name,
        id: result.id,
        imgSrc: result.sprites.front_default,
        hp: result.stats[0]?.base_stat,
        attack:result.stats[1]?.base_stat,
        defense:result.stats[2]?.base_stat,
        spDef: result.stats[3]?.base_stat,
        spAtk: result.stats[4]?.base_stat,
        spd: result.stats[5]?.base_stat,
    };
return pokemon;
}

