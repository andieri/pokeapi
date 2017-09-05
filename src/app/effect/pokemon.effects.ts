import {Injectable} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import {Effect, Actions} from '@ngrx/effects';
import {Http} from '@angular/http';
import {LoadPokemonByIdSuccecc} from '../action/pokemon.action';
import * as PokemonActions from '../action/pokemon.action';

const BASE_URL = 'http://pokeapi.co/api/v2/pokemon/';

@Injectable()
export class PokemonEffects {

    constructor(private _actions$: Actions, private _http: Http) {
    }

    @Effect()
    onLoadPokemonColor$ =
        this._actions$.ofType(PokemonActions.LOAD_POKEMON)
            .switchMap((action) => this._http.get(BASE_URL + action.payload))
            .map(res => res.json())
            .map(payload => new LoadPokemonByIdSuccecc(payload));
}
