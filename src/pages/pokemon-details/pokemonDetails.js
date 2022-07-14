import React from 'react';
import {useSelector} from "react-redux";
import PokemonBasicInformation from "../../components/pokemonBasicInformation/pokemonBasicInformation";
import PokemonStats from "../../components/pokemonStats/pokemonStats";
import PokemonTypes from "../../components/pokemonTypes/pokemonTypes";
import EvolutionChainProcessor from "../../components/evolutionChain/evolutionChainProcessor";

const PokemonDetails = () => {

    const {pokemon} = useSelector(state => state.pokemons);

    const pokeBasic = {
        height: pokemon.height,
        weight: pokemon.weight,
        abilities: pokemon.abilities,
        id: pokemon.id
    };

    console.log(pokeBasic.id);

    return (
        <div>
            <div>{pokemon.species.name}</div>
            <div>
                <img src={pokemon.sprites?.other?.dream_world.front_default} alt={pokemon.species.name}/>
            </div>
            <div>
                <PokemonBasicInformation basicInformation={pokeBasic}/>
                <PokemonStats stats={pokemon.stats}/>
                Types==
                <PokemonTypes types={pokemon.types}/>
                weaknesses ==
                {/*pokemon weaknesses<PokemonWeaknesses/>*/}
            </div>
            <div>evolutions<EvolutionChainProcessor id={pokemon.id}/></div>
            <div>videos</div>
            {pokemon.species.name}
        </div>
    );
};

export default PokemonDetails;