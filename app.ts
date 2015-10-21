import {ShadowDomStrategy, NativeShadowDomStrategy, Component, View, NgFor, bootstrap} from 'angular2/angular2';
import {VgPlayer, VgOverlayPlay, VgControls, VgPlayPause, VgPlaybackButton, VgScrubBar, VgScrubBarCurrentTime, VgScrubBarBufferingTime, VgMute, VgFullscreen} from './src/videogular2';


@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'app.html',
    directives: [
        VgPlayer,
        VgOverlayPlay,
        VgControls,
        VgPlayPause,
        VgPlaybackButton,
        VgScrubBar,
        VgScrubBarCurrentTime,
        VgScrubBarBufferingTime,
        VgMute,
        VgFullscreen,
        NgFor
    ]
})
class MyAppComponent {
    sources:Array<Object>;
    player:VgPlayer;
    controls:boolean = false;
    autoplay:boolean = false;
    loop:boolean = false;
    preload:string = 'auto';

    constructor() {
        this.sources = [
            {
                src: "http://static.videogular.com/assets/videos/videogular.mp4",
                type: "video/mp4"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.ogg",
                type: "video/ogg"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.webm",
                type: "video/webm"
            }
        ];

        this.player = document.querySelector("vg-player");
    }

    onPlayerReady(API) {
        console.log("player ready");
        console.log(API);
    }

    onMediaReady(API) {
        console.log("media ready");
        // pipVideo
        API.seekTime("pipVideo", 50, true);
    }
}

bootstrap(MyAppComponent);
