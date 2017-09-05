import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Pokemon} from '../../type/pokemon';
import * as fromRoot from '../../reducer/main.reducer';
import {Store} from '@ngrx/store';
import {Id} from '../../type/external-types';

@Component({
    selector: 'app-pokemon-container',
    templateUrl: './pokemon-container.component.html'
})

export class PokemonContainerComponent implements OnInit {

    pokemon$: Observable<Pokemon>;
    currentColor$: Observable<Id>;
    currentColorId: Id;

    constructor(private _store: Store<fromRoot.State>) {
    }

    ngOnInit() {
        this.pokemon$ = this._store.select(fromRoot.getPokemon);
        this.currentColor$ = this._store.select(fromRoot.getCurrentColor);
        this.currentColor$.subscribe(currentColorId => {
            this.currentColorId = currentColorId
        });
    }
}
