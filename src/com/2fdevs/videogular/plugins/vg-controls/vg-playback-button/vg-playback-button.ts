import {Component, View, LifecycleEvent, ViewEncapsulation} from 'angular2/angular2';

import {VgAPI} from 'com/2fdevs/videogular/services/vg-api';

@Component({
    selector: 'vg-playback-button',
    properties: [
        'targetId: for'
    ],
    host: {
        '(click)': 'onClick()'
    },
    lifecycle: [LifecycleEvent.onInit]
})
@View({
    templateUrl: 'com/2fdevs/videogular/plugins/vg-controls/vg-playback-button/vg-playback-button.html',
    encapsulation: ViewEncapsulation.NONE
})
export class VgPlaybackButton {

    constructor(public API:VgAPI) {
        this.playbackValues = ['0.5', '1.0', '1.5', '2.0'];
        this.playbackIndex = 1;
    }

    onInit() {
        this.target = this.API.getMediaById(this.targetId);
    }

    onClick() {
        this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;  

        this.target.playbackRate = (this.playbackValues[this.playbackIndex]);
    }
}
