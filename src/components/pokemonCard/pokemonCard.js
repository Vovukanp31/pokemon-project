import React, {useEffect, useState} from 'react';
import {pokemonsServices} from "../../services";
import css from "./pokemonCard.module.css";
import {getPokemon} from "../../store/slices/pokemon.slices/pokemon.slice";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import PokemonTypes from "../pokemonTypes/pokemonTypes";

const PokemonCard = ({state:{url, name}}) => {

    let id = url.split('/').slice(-2, -1)

    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        pokemonsServices.getPokemonById(id).then(value => setPokemon(value));
    }, []);

    const dispatch = useDispatch();

    const title = name[0].toUpperCase() + name.substring(1);

    return (
        <div className={css.pokeCard}>
                <img src={pokemon.sprites?.other?.dream_world.front_default} alt={name}/>
            <div className={css.titleOfPokemon}>{title}</div>
                <Link className={css.detailsButton} onClick={() => {
                    dispatch(getPokemon({pokemon}));
                }} to={`/pokemons/${id}`}>Open pokedex</Link>
            {/*<PokemonTypes types={pokemon.types}/> Доробити типи покемонів*/}
        </div>
    );
};

export default PokemonCard;