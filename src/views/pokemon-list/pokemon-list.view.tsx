import {PokemonListViewUI} from "./pokemon-list.ui";
import {Pokemon} from "../../types";
import {useLayoutEffect, useState} from "react";
import {getPokemonList} from "../../services/pokemon.rest";

export const PokemonListView = () => {
    const [pokemon, setPokemon] = useState({
        data: [] as Pokemon[],
        state: 'loading' as 'loading' | 'error' | 'idle',
        error: ""
    });

    const isLoading = pokemon.state === 'loading';
    const isError = pokemon.state === 'error';
    const isIdle = pokemon.state === 'idle';

    useLayoutEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getPokemonList({limit: 50, offset: 0, abortSignal: signal})
            .then(data => {
                setPokemon(v => ({...v, data, state: 'idle'}));
            })
            .catch(err => {
                setPokemon(v => ({...v, state: 'error', error: err}))
            })

        return () => controller.abort();
    }, []);

    return <PokemonListViewUI pokemon={pokemon.data} isIdle={isIdle} isError={isError} isLoading={isLoading}/>
}
