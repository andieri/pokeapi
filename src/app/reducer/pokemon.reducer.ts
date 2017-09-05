import {Pokemon} from '../type/pokemon';
import * as PokemonAction from '../action/pokemon.action';

export interface State {
    currentPokemon: Pokemon;
}

export const initialState: State = {
    currentPokemon: {id: 0, name: '', image: ''}
};

export const getCurrentPokemon = (state: State) => state.currentPokemon;

export function reducer(state = initialState, action: PokemonAction.Any) {
    let {currentPokemon} = state;
    let changed = false;

    switch (action.type) {
        case PokemonAction.LOAD_POKEMON_SUCCESS:
            const loadedPokemon = action.payload as Pokemon;
            currentPokemon.id = loadedPokemon.id;
            currentPokemon.name = loadedPokemon.name;
            currentPokemon.image = loadedPokemon['sprites']['front_default'];
            changed = true;
            break;
    }
    return changed ? {currentPokemon} : state;
}


