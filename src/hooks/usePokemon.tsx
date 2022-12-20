import { useState, useEffect } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonFull } from '../interfaces/PokemonInterfaces';


export const usePokemon = ( id: string ) => {
console.log(`${id}=>>`);

    const [ isLoading, setIsLoading ] = useState(true)
    const [ pokemon, setPokemon ] = useState<PokemonFull>({} as PokemonFull)

    const loadPokemon = async() => {
        const resp = await pokemonApi.get<PokemonFull>(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        console.log(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        
        setPokemon( resp.data );
        setIsLoading(false);
    }

    useEffect(() => {
        loadPokemon();
    }, [])

    return {
        isLoading,
        pokemon
    }
}
