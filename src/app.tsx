import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PokemonListView} from "./views/pokemon-list/pokemon-list.view";
import {StarWarsMovieListView} from "./views/star-wars-movie-list/star-wars-movie-list.view";
import {Header} from "./components/header";
import {GlobalStyles} from "./app.styles";

function App() {
    return (
        <>
            <GlobalStyles/>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<PokemonListView/>}/>
                    <Route path="starwars" element={<StarWarsMovieListView/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
