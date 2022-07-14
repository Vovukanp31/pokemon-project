import React from 'react';
import TypeBadge from "../../constants/typeBadge/typeBadge";

const PokemonTypes = ({types}) => {
    return (
        <div>
            {types.map(({type}) => <TypeBadge type={type}/>)}
        </div>
    );
};

export default PokemonTypes;