import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";


export const pokemonsServices = {
    getPokemons: ({limit, offset}) => axiosService.get(urls.pokemons.pokemon, {params: {limit, offset}}).then(value => value.data),
    getPokemonById: (id) => axiosService.get(`${urls.pokemons.pokemon}/${id}`).then(value => value.data),
    getPokemonSpecies: (id) => axiosService.get(`${urls.pokemons.pokemonSpecies}/${id}`).then(value => value.data),
    getPokemonEvolution: (evolutionChain) => axiosService.get(`${urls.pokemons.evolutions}/${evolutionChain}`).then(value => value.data)
}