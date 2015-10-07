import {Component, View, ViewEncapsulation, OnInit} from 'angular2/angular2';

import {VgAPI} from 'com/2fdevs/videogular/services/vg-api';

@Component({
    selector: 'vg-scrub-bar-buffering-time',
    inputs: [
        'targetId: for'
    ]
})
@View({
    templateUrl: 'com/2fdevs/videogular/plugins/vg-controls/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.html',
    encapsulation: ViewEncapsulation.NONE
})
export class VgScrubBarBufferingTime implements OnInit {
    constructor(public API:VgAPI) {

    }

    onInit() {
        this.target = this.API.getMediaById(this.targetId);
    }

    getBufferTime() {
        var bufferTime = "0%";

        if (this.target.buffered.length) {
            bufferTime = ((this.target.buffer.end / this.target.time.total) * 100) + '%';
        }

        return bufferTime;
    }
}
