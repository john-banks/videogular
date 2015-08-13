import {Component, View, LifecycleEvent} from 'angular2/angular2';

import {VgAPI} from 'com/2fdevs/videogular/services/vg-api';

@Component({
    selector: 'vg-scrub-bar-current-time',
    viewBindings: [VgAPI],
    host: {
        '(mousedown)': 'onMouseDownScrubBar($event)'
    },
    lifecycle: [LifecycleEvent.onInit]
})
@View({
    templateUrl: 'com/2fdevs/videogular/plugins/vg-controls/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.html'
})
export class VgScrubBarCurrentTime {
    constructor(public API:VgAPI) {

    }

    onInit() {
        this.target = this.API.getMediaById(this.idTarget);
    }

    getPercentage() {
        return ((this.target.time.current * 100 / this.target.time.total)) + '%';
    }
}
