import {Component, View, ViewEncapsulation} from 'angular2/angular2';

import {VgAPI} from '../api';

@Component({
    selector: 'vg-controls'
})
@View({
    templateUrl: 'com/2fdevs/videogular/plugins/vg-controls/vg-controls.html',
    encapsulation: ViewEncapsulation.Emulated
})
export class VgControls {
    constructor(public API:VgAPI) {

    }
}
