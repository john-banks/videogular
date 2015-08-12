import {Component, View, ElementRef} from 'angular2/angular2';

import {VgAPI} from 'com/2fdevs/videogular/services/vg-api';
import {VgAbstractControl} from 'com/2fdevs/videogular/components/vg-abstract-control/vg-abstract-control';

@Component({
    selector: 'vg-scrub-bar-current-time',
    viewInjector: [VgAPI],
    host: {
        '(mousedown)': 'onMouseDownScrubBar($event)'
    }
})
@View({
    templateUrl: 'com/2fdevs/videogular/plugins/vg-controls/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.html'
})
export class VgScrubBarCurrentTime extends VgAbstractControl {
    constructor(public ref:ElementRef, public API:VgAPI) {
        super(ref, API);
    }

    getPercentage() {
        return ((this.target.time.current * 100 / this.target.time.total)) + '%';
    }
}
