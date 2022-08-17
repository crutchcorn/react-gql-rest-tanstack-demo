import {StarWarsMovie} from "../../types";

interface StarWarsMovieListViewUIProps {
    movies: StarWarsMovie[]
}

export const StarWarsMovieListViewUI = ({movies}: StarWarsMovieListViewUIProps) => {
    return <ul>
        {movies.map(movie =>
            <li key={movie.id}>{movie.name}</li>
        )}
    </ul>
}
