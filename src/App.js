import './App.module.css';
import {Route, Routes} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import PokemonDetails from "./pages/pokemon-details/pokemonDetails";
import Pokemons from "./pages/pokemons/pokemons";

function App() {
    return (
        <div>
            <Routes>
                < Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'pokemons'} element={<Pokemons/>}/>
                    <Route path={'pokemons/:id'} element={<PokemonDetails/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App;
