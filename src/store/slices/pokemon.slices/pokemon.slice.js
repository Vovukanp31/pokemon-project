import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {pokemonsServices} from "../../../services";

const initialState = {
    pokemons: {},
    status: null,
    error: null,
    pokemon: {}
}

export const getPokemons = createAsyncThunk(
    'pokemons/getPokemons',
    async (data, {rejectWithValue}) => {
        try {
            const {limit, offset} = data;
            const pokemons = await pokemonsServices.getPokemons({limit, offset})
            return pokemons
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);


const pokemonsSlice = createSlice({

    name: 'pokemons',

    initialState,

    reducers: {
        getPokemon: (state, action) => {
            state.pokemon = (action.payload.pokemon);
        }
    },

    extraReducers: {
        [getPokemons.pending]: (state) => {
            state.status = 'pending';
            state.error = null;
        },
        [getPokemons.fulfilled]: (state, action) => {
            state.pokemons = action.payload;
            state.status = null;
        },
        [getPokemons.rejected]: (state, action) => {
            state.error = action.payload;
        }
    }
});

const pokemonsReducer = pokemonsSlice.reducer;

export const {getPokemon} = pokemonsSlice.actions;

export default pokemonsReducer;
