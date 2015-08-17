import {Component, View, LifecycleEvent, ViewEncapsulation} from 'angular2/angular2';

import {VgAPI} from 'com/2fdevs/videogular/services/vg-api';

@Component({
    selector: 'vg-play-pause',
    properties: [
        'targetId: for'
    ],
    host: {
        '(click)': 'onClick()'
    },
    lifecycle: [LifecycleEvent.onInit]
})
@View({
    templateUrl: 'com/2fdevs/videogular/plugins/vg-controls/vg-play-pause/vg-play-pause.html',
    encapsulation: ViewEncapsulation.NONE
})
export class VgPlayPause {

    constructor(public API:VgAPI) {

    }

    onInit() {
        this.target = this.API.getMediaById(this.targetId);
    }

    onClick() {
        var state = this.getState();

        switch (state) {
            case 'play':
                this.target.pause();
                break;

            case 'pause':
                this.target.play();
                break;
        }
    }

    getState() {
        var state;

        if (this.target.state instanceof Array) {
            state = 'pause';
            for (var i = 0, l = this.target.state.length; i < l; i++){
                if (this.target.state[i] === 'play'){
                    state = 'play';
                    break;
                }
            }
        }
        else {
            state = this.target.state;
        }

        return state;
    }
}
