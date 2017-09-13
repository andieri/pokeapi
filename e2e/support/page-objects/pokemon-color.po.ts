import {$} from 'protractor';

export class PokemonColorPage {

    public ColorSelectorDropdown: any;
    public ColorSelectorDropdownOptions: any;

    constructor() {
        this.ColorSelectorDropdown = $('#color-selector');
        this.ColorSelectorDropdownOptions = this.ColorSelectorDropdown.$$('.ui-dropwown-item');
    }
}
