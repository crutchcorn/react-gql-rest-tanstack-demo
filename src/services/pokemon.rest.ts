// https://pokeapi.co/
const BASE_URL = `https://pokeapi.co/api/v2/`

interface getPokemonListProps {
    limit: number;
    offset: number;
    abortSignal?: AbortSignal;
}

export function getPokemonList({limit, offset, abortSignal}: getPokemonListProps) {
    const LIST_URL = `${BASE_URL}pokemon?limit=${limit}&offset=${offset}`;
    return fetch(LIST_URL, {signal: abortSignal}).then(res => res.json()).then(poke => poke.results);
}
