import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pokemon} from '../../type/pokemon';

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './pokemon-detail.component.html'
})
export class PokemonDetailComponent implements OnInit {

    @Input()
    pokemon: Pokemon;

    @Output()
    backToColorList = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

}
