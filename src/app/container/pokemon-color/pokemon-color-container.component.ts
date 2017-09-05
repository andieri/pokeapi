import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {PokemonColor} from '../../type/pokemon-color'
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducer/main.reducer';
import {ColorId} from '../../type/external-types';
import {ChangeCurrentColor, LoadPokemonColor} from '../../action/pokemon-color.action';
import {SelectItem} from 'primeng/primeng';
import {LoadPokemonById} from '../../action/pokemon.action';

@Component({
    selector: 'app-pokemon-color-container',
    templateUrl: './pokemon-color-container.component.html'
})
export class PokemonColorContainerComponent implements OnInit {

    pokemonColor$: Observable<PokemonColor>;
    colorId$: Observable<ColorId>;
    availableColorList$: Observable<Array<SelectItem>>;

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit() {
        this.pokemonColor$ = this._store.select(fromRoot.getPokemonColor);
        this.colorId$ = this._store.select(fromRoot.getCurrentColor);
        this.availableColorList$ = this._store.select(fromRoot.getColorList);
    }

    colorSelect(id) {
        this._store.dispatch(new ChangeCurrentColor(id));
        this._store.dispatch(new LoadPokemonColor(id));
    }

    loadPokemonById(pokemon) {
        console.log('pokemon color container', pokemon);
        const id = pokemon.url.split('/')[6];
        this._store.dispatch(new LoadPokemonById(id));
    }
}
