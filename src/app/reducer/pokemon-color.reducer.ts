import {Id} from '../type/external-types';
import {PokemonColor} from '../type/pokemon-color';
import * as PokemonColorAction from '../action/pokemon-color.action';
import {SelectItem} from 'primeng/primeng';

export interface State {
    currentColorId: Id;
    pokemonColor: PokemonColor;
    colorList: Array<SelectItem>;
}

const availableColorList: Array<SelectItem> = [
    {value: '1', label: 'black'},
    {value: '2', label: 'blue'},
    {value: '3', label: 'brown'},
    {value: '4', label: 'gray'},
    {value: '5', label: 'green'},
    {value: '6', label: 'pink'},
    {value: '7', label: 'purple'},
    {value: '8', label: 'red'},
    {value: '9', label: 'white'},
    {value: '10', label: 'yellow'}
];

export const initialState: State = {
    currentColorId: 0,
    pokemonColor: {id: 0, colorNames: [], name: '', pokemons: []},
    colorList: availableColorList
};

export const getPokemonColor = (state: State) => state.pokemonColor;
export const getCurrentColor = (state: State) => state.currentColorId;
export const getColorList = (state: State) => state.colorList;

export function reducer(state = initialState, action: PokemonColorAction.Any) {
        let {currentColorId, pokemonColor, colorList} = state;
        let changed = false;
        switch (action.type) {
            case PokemonColorAction.LOAD_POKEMON_COLOR_SUCCESS: {
                const newPokemonColor = action.payload as PokemonColor;
                pokemonColor = {
                    id: newPokemonColor.id,
                    name: newPokemonColor.name,
                    colorNames: newPokemonColor['names'],
                    pokemons: newPokemonColor['pokemon_species']
                };
                changed = true;
                break;
            }
            case PokemonColorAction.CHANGE_COLOR: {
                const newColorId = action.payload as Id;
                currentColorId = newColorId;
                changed = true;
                break;
            }
        }
        return changed ? {currentColorId, pokemonColor, colorList} : state;
}

