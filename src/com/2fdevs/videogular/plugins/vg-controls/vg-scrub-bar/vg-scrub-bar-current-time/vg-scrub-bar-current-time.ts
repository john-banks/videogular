import {Component, View, ViewEncapsulation, OnInit} from 'angular2/angular2';

import {VgAPI} from 'com/2fdevs/videogular/services/vg-api';

@Component({
    selector: 'vg-scrub-bar-current-time',
    inputs: [
        'targetId: for'
    ]
})
@View({
    templateUrl: 'com/2fdevs/videogular/plugins/vg-controls/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.html',
    encapsulation: ViewEncapsulation.NONE
})
export class VgScrubBarCurrentTime implements OnInit {
    constructor(public API:VgAPI) {

    }

    onInit() {
        this.target = this.API.getMediaById(this.targetId);
    }

    getPercentage() {
        return ((this.target.time.current * 100 / this.target.time.total)) + '%';
    }
}
