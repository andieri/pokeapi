import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Id} from '../../type/external-types';
import {SelectItem} from 'primeng/primeng';

@Component({
    selector: 'app-color-selector',
    templateUrl: './color-selector.component.html'
})
export class ColorSelectorComponent implements OnInit {

    @Input()
    availableColorList: Array<SelectItem>;

    @Input()
    selectedColor: Id;

    @Output()
    selectColor = new EventEmitter<Id>();

    constructor() {
    }

    ngOnInit() {
    }

    selectNewColor(id) {
        this.selectedColor = id.value;
        this.selectColor.emit(this.selectedColor);
    }
}
