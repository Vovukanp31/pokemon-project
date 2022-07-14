import React, {useEffect, useState} from 'react';
import {axiosService, pokemonsServices} from "../../services";
import EvolutionCard from "./evolutionCard";

const EvolutionChainProcessor = ({id}) => {

    const [species, setSpecies] = useState(null);
    const [evolution, setEvolution] = useState(null);

    const getIdByUrl = (url) => {
        return url.split('/').slice(-2, -1).toString()
    };

    useEffect(() => {
       pokemonsServices.getPokemonSpecies(id).then(({evolution_chain: {url}}) => setSpecies(getIdByUrl(url)));
        if( typeof species === 'string') {
            pokemonsServices.getPokemonEvolution(species).then(({chain}) => setEvolution(chain))
        }
    }, [id, species]);

    console.log(species)

    return (
        <div>
            {console.log(evolution)}
            <EvolutionCard id={evolution && getIdByUrl(evolution.species.url)}/>
        </div>
    );
};

export default EvolutionChainProcessor;