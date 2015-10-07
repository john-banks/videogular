import {Component, View, OnInit, ViewEncapsulation} from 'angular2/angular2';

import {VgAPI} from 'com/2fdevs/videogular/services/vg-api';

@Component({
    selector: 'vg-play-pause',
    inputs: [
        'targetId: for'
    ],
    host: {
        '(click)': 'onClick()'
    }
})
@View({
    templateUrl: 'com/2fdevs/videogular/plugins/vg-controls/vg-play-pause/vg-play-pause.html',
    encapsulation: ViewEncapsulation.NONE
})
export class VgPlayPause implements OnInit {
    target: any;
    targetId: string;

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

        if (this.target.state instanceof Object) {
            state = 'pause';

            for (var media in this.target.state) {
                if (this.target.state[media] === 'play'){
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
