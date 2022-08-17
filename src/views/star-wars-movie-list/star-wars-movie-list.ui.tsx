import {StarWarsMovie} from "../../types";

interface StarWarsMovieListViewUIProps {
    movies: StarWarsMovie[];
    isIdle: boolean;
    isError: boolean;
    isLoading: boolean;
}

export const StarWarsMovieListViewUI = ({
                                            movies,
                                            isIdle,
                                            isError,
                                            isLoading
                                        }: StarWarsMovieListViewUIProps) => {
    if (isLoading) return (
        <div>Loading...</div>
    )

    if (isError) return (
        <div>Error occurred while loading data</div>
    )

    return <ul>
        {movies.map(movie =>
            <li key={movie.id}>{movie.title}</li>
        )}
    </ul>
}
