import {Component, View, LifecycleEvent} from 'angular2/angular2';

import {VgAPI} from 'com/2fdevs/videogular/services/vg-api';

@Component({
    selector: 'vg-mute',
    viewBindings: [VgAPI],
    properties: [
        'idTarget: for'
    ],
    host: {
        '(click)': 'onClick()'
    },
    lifecycle: [LifecycleEvent.onInit]
})
@View({
    templateUrl: 'com/2fdevs/videogular/plugins/vg-controls/vg-mute/vg-mute.html'
})
export class VgMute {
    currentVolume:number;

    constructor(public API:VgAPI) {

    }

    onInit() {
        this.target = this.API.getMediaById(this.idTarget);
        this.currentVolume = this.target.volume;
    }

    onClick() {
        var volume = this.getVolume();

        if (volume === 0) {
            this.target.volume = this.currentVolume;
        }
        else {
            this.currentVolume = volume;
            this.target.volume = 0;
        }
    }

    getVolume() {
        var volume;
        var result;

        if (this.target.volume instanceof Array) {
            volume = 0;

            for (var i=0, l=this.target.volume.length; i<l; i++) {
                volume += this.target.volume[i].volume;
            }

            result = (volume / this.target.volume.length);
        }
        else {
            result = this.target.volume;
        }

        return result;
    }
}
