import {PokemonListViewUI} from "./pokemon-list.ui";
import {getPokemonList} from "../../services/pokemon.rest";
import {useQuery} from "@tanstack/react-query";

export const PokemonListView = () => {
    const {isLoading, error, data, isFetching} = useQuery(["pokemon"], ({signal}) => getPokemonList({
        limit: 50,
        offset: 0,
        abortSignal: signal
    }));

    return <PokemonListViewUI pokemon={data} isIdle={!isFetching} isError={!!error} isLoading={isLoading}/>
}
