import {PokemonListViewUI} from "./pokemon-list.ui";
import {Pokemon} from "../../types";

const pokemon: Pokemon[] = [
    {
        id: 1,
        name: "Pikachu"
    }
]

export const PokemonListView = () => {
    return <PokemonListViewUI pokemon={pokemon}/>
}
