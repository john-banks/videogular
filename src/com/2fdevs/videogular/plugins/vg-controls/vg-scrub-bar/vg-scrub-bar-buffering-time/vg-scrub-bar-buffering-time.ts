import {Component, View, ViewEncapsulation, LifecycleEvent} from 'angular2/angular2';

import {VgAPI} from 'com/2fdevs/videogular/services/vg-api';

@Component({
    selector: 'vg-scrub-bar-buffering-time',
    properties: [
        'targetId: for'
    ],
    lifecycle: [LifecycleEvent.onInit]
})
@View({
    templateUrl: 'com/2fdevs/videogular/plugins/vg-controls/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.html',
    encapsulation: ViewEncapsulation.NONE
})
export class VgScrubBarBufferingTime {
    constructor(public API:VgAPI) {

    }

    onInit() {
        this.target = this.API.getMediaById(this.targetId);
    }

    getBufferStart() {
        return ((this.target.time.current * 100 / this.target.time.total)) + '%';
    }

    getBufferTime() {
        return ((this.target.time.current * 100 / this.target.time.total)) + '%';
    }
}
