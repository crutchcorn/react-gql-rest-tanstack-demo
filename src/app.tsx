import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PokemonListView} from "./views/pokemon-list/pokemon-list.view";
import {StarWarsMovieListView} from "./views/star-wars-movie-list/star-wars-movie-list.view";
import {Header} from "./components/header";
import {GlobalStyles} from "./app.styles";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyles/>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<PokemonListView/>}/>
                    <Route path="starwars" element={<StarWarsMovieListView/>}/>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
