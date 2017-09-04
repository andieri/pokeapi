import {Injectable} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {Effect, Actions} from '@ngrx/effects';
import * as pokemonColorActions from '../action/pokemon-color.action';
import {Http} from '@angular/http';
import {LoadPokemonColorSuccess} from '../action/pokemon-color.action';

const BASE_URL = 'http://pokeapi.co/api/v2/pokemon-color/';

@Injectable()
export class PokemonColorEffects {

    constructor(private _actions$: Actions, private _http: Http) {
    }

    @Effect()
    onLoadPokemonColor$ =
        this._actions$.ofType(pokemonColorActions.LOAD_POKEMON_COLOR)
            .switchMap((action) => this._http.get(BASE_URL + action.payload))
            .map(res => res.json())
            .map(payload => new LoadPokemonColorSuccess(payload));
}
