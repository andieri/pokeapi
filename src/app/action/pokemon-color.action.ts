import {Id} from '../type/external-types';
import {PokemonColor} from '../type/pokemon-color';

export const LOAD_POKEMON_COLOR = '[Load] Pokemon color';
export const LOAD_POKEMON_COLOR_SUCCESS = '[Success] Pokemon Color';
export const CHANGE_COLOR = '[Change] Current color';

export class LoadPokemonColor {
    readonly type = LOAD_POKEMON_COLOR;

    constructor(public payload: Id) {
    }
}

export class LoadPokemonColorSuccess {
    readonly type = LOAD_POKEMON_COLOR_SUCCESS;

    constructor(public payload: PokemonColor) {
    }
}

export class ChangeCurrentColor {
    readonly type = CHANGE_COLOR;

    constructor(public payload: Id) {
    }
}

export type Any = LoadPokemonColor | LoadPokemonColorSuccess | ChangeCurrentColor;
