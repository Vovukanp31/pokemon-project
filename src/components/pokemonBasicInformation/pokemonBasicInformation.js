import React from 'react';
import Ability from "../ability/ability";

const PokemonBasicInformation = ({basicInformation: {height, weight, abilities, id}}) => {

    // console.log(abilities);

    return (
        <div>
            <div>Height {height}</div>
            <div>Weight {weight}</div>
            <div>Abilities -- {abilities.map(({ability}) => {return <Ability key={ability.url} ability={ability}/>})}</div>
            <div>Gender {id}</div>
        </div>
    );
};

export default PokemonBasicInformation;