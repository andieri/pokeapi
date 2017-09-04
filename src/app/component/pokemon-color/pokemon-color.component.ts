import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PokemonColor} from '../../type/pokemon-color';
import {Link} from '../../type/link';

@Component({
    selector: 'app-pokemon-color',
    templateUrl: './pokemon-color.component.html'
})
export class PokemonColorComponent implements OnInit {

    @Input()
    pokemonColor: PokemonColor;

    @Output()
    selectedPokemon: EventEmitter<Link> = new EventEmitter<Link>();

    constructor() {
    }

    ngOnInit() {
    }

    getSelectedPokemon = (event) => {
        this.selectedPokemon.emit(event);
    }
}
