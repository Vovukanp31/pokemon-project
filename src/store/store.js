import {configureStore} from "@reduxjs/toolkit";
import pokemonsReducer from "./slices/pokemon.slices/pokemon.slice";

const store = configureStore({
    reducer: {
        pokemons: pokemonsReducer
    }
});

export default store