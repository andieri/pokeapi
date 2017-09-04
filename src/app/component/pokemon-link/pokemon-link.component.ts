import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Link} from '../../type/link';

@Component({
    selector: 'app-pokemon-link',
    templateUrl: './pokemon-link.component.html'
})
export class PokemonLinkComponent implements OnInit {

    @Input()
    pokemonLink: Link;

    @Output()
    getPokemon = new EventEmitter<Link>();

    constructor() {
    }

    ngOnInit() {
    }

    onSelect(link) {
        this.getPokemon.emit(link);
    }

}
