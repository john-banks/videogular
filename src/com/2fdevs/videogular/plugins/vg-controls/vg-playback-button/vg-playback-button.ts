import {Component, View, OnInit, ViewEncapsulation} from 'angular2/angular2';

import {VgAPI} from 'com/2fdevs/videogular/services/vg-api';

@Component({
    selector: 'vg-playback-button',
    inputs: [
        'targetId: for'
    ],
    host: {
        '(click)': 'onClick()'
    }
})
@View({
    templateUrl: 'com/2fdevs/videogular/plugins/vg-controls/vg-playback-button/vg-playback-button.html',
    encapsulation: ViewEncapsulation.NONE
})
export class VgPlaybackButton implements OnInit {
    playbackValues: Array<string>;
    playbackIndex: number;
    target: any;
    targetId: string;


    constructor(public API:VgAPI) {
        this.playbackValues = ['0.5', '1.0', '1.5', '2.0'];
        this.playbackIndex = 1;
    }

    onInit() {
        this.target = this.API.getMediaById(this.targetId);
    }

    onClick() {
        this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;

        if (this.target instanceof VgAPI) {
            this.target.playbackRate = (this.playbackValues[this.playbackIndex]);
        }
        else {
            this.target.playbackRate[this.targetId] = (this.playbackValues[this.playbackIndex]);
        }
    }
}
