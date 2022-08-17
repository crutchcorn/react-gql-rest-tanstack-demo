import {StarWarsMovieListViewUI} from "./star-wars-movie-list.ui";
import {StarWarsMovie} from "../../types";

const movies: StarWarsMovie[] = [
    {
        id: 1,
        name: "Empire Strikes Back"
    }
]

export const StarWarsMovieListView = () => {
    return <StarWarsMovieListViewUI movies={movies}/>
}
