import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Id} from '../../type/external-types';
import {SelectItem} from 'primeng/primeng';
import {ActivatedRoute, Router} from '@angular/router';

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

    constructor(private _router: Router, private _route: ActivatedRoute) {
    }

    ngOnInit() {
    }

    selectNewColor(id) {
        this.selectedColor = id.value;
        this._router.navigate(['/' + this._route.snapshot.url[0].path + '/' + this.selectedColor]);
        this.selectColor.emit(this.selectedColor);
    }
}
