import {Component, View, ElementRef} from 'angular2/angular2';

import {VgAPI} from 'com/2fdevs/videogular/services/vg-api';
import {VgAbstractControl} from 'com/2fdevs/videogular/components/vg-abstract-control/vg-abstract-control';

@Component({
    selector: 'vg-fullscreen',
    viewBindings: [VgAPI],
    host: {
        '(click)': 'onClick()'
    }
})
@View({
    templateUrl: 'com/2fdevs/videogular/plugins/vg-controls/vg-fullscreen/vg-fullscreen.html'
})
export class VgFullscreen {

    constructor(public ref:ElementRef, public API:VgAPI) {

    }

    onClick() {
        var element = this.target;

        if (this.target instanceof VgAPI) {
            element = null;
        }

        this.API.toggleFullscreen(element);
    }
}
