import {Pokemon} from "../../types";

interface PokemonListViewUIProps {
    pokemon: Pokemon[]
}

export const PokemonListViewUI = ({pokemon}: PokemonListViewUIProps) => {
    return <ul>
        {pokemon.map(poke =>
            <li key={poke.id}>{poke.name}</li>
        )}
    </ul>
}
