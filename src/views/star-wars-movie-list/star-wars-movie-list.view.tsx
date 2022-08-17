import {StarWarsMovieListViewUI} from "./star-wars-movie-list.ui";
import {StarWarsMovie} from "../../types";
import {useLayoutEffect, useState} from "react";
import {getStarWarsMovies} from "../../services/star-wars.gql";

export const StarWarsMovieListView = () => {
    const [networkdata, setNetworkdata] = useState({
        data: [] as StarWarsMovie[],
        state: 'loading' as 'loading' | 'error' | 'idle',
        error: ""
    });

    const isLoading = networkdata.state === 'loading';
    const isError = networkdata.state === 'error';
    const isIdle = networkdata.state === 'idle';

    useLayoutEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getStarWarsMovies({abortSignal: signal})
            .then(data => {
                console.log({data})
                setNetworkdata(v => ({...v, data, state: 'idle'}));
            })
            .catch(err => {
                setNetworkdata(v => ({...v, state: 'error', error: err}))
            })

        return () => controller.abort();
    }, []);

    return <StarWarsMovieListViewUI movies={networkdata.data} isLoading={isLoading}
                                    isError={isError}
                                    isIdle={isIdle}/>
}
