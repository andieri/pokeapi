export const LOAD_POKEMON = '[Load] Pokemon by id';
export const LOAD_POKEMON_SUCCESS = '[Loaded] Pokemon by id';

export class LoadPokemonById {
    readonly type = LOAD_POKEMON;

    constructor(public payload) {
    }
}

export class LoadPokemonByIdSuccecc {
    readonly type = LOAD_POKEMON_SUCCESS;

    constructor(public payload) {
    }
}

export type Any = LoadPokemonById | LoadPokemonByIdSuccecc;
