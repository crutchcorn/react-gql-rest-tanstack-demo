import {StarWarsMovieListViewUI} from "./star-wars-movie-list.ui";
import {getStarWarsMovies} from "../../services/star-wars.gql";
import {useQuery} from "@tanstack/react-query";

export const StarWarsMovieListView = () => {
    const {isLoading, error, data, isFetching} = useQuery(["starwarsmovies"], ({signal}) => getStarWarsMovies({
        abortSignal: signal
    }));

    return <StarWarsMovieListViewUI movies={data} isLoading={isLoading}
                                    isError={!!error}
                                    isIdle={!isLoading}/>
}
