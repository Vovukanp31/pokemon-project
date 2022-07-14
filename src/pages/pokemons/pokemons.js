import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPokemons} from "../../store/slices/pokemon.slices/pokemon.slice";
import PokemonCard from "../../components/pokemonCard/pokemonCard";
import css from './pokemons.module.css'

const Pokemons = () => {
    const {pokemons, status, error} = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    const limit = 20;
    let offset = 0;

    useEffect(() => {
        dispatch(getPokemons({limit, offset}))
    }, [dispatch])

    return (
        <div className={css.pokemonsContainer}>
            {error && <h1>{error}</h1>}
            {pokemons.results && pokemons.results.map( pokemon => <PokemonCard key={pokemon.name}  state={pokemon}/>)}
        </div>
    );
};

export default Pokemons;