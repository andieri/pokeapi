import * as fromPokemon from './pokemon.reducer';
import * as fromPokemonColor from './pokemon-color.reducer';
import {createSelector} from 'reselect';


export interface State {
    pokemon: fromPokemon.State;
    pokemonColor: fromPokemonColor.State;
}

export const initialState: State = {
    pokemon: fromPokemon.initialState,
    pokemonColor: fromPokemonColor.initialState
};
export const getPokemonColorState = (state: State) => state.pokemonColor;
export const getColorList = createSelector(getPokemonColorState, fromPokemonColor.getColorList);
export const getPokemonColor = createSelector(getPokemonColorState, fromPokemonColor.getPokemonColor);
export const getCurrentColor = createSelector(getPokemonColorState, fromPokemonColor.getCurrentColor);

export const getPokemonState = (state: State) => state.pokemon;
export const getPokemon = createSelector(getPokemonState, fromPokemon.getCurrentPokemon);

export const reducers = {pokemon: fromPokemon.reducer, pokemonColor: fromPokemonColor.reducer};
