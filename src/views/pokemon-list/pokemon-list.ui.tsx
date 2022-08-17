import {Pokemon} from "../../types";

interface PokemonListViewUIProps {
    pokemon: Pokemon[]
    isIdle: boolean;
    isError: boolean;
    isLoading: boolean;
}

export const PokemonListViewUI = ({
                                      pokemon,
                                      isIdle,
                                      isError,
                                      isLoading
                                  }: PokemonListViewUIProps) => {
    if (isLoading) return (
        <div>Loading...</div>
    )

    if (isError) return (
        <div>Error occurred while loading data</div>
    )

    return <ul>
        {pokemon.map(poke =>
            <li key={poke.id}>{poke.name}</li>
        )}
    </ul>
}
