import { useEffect } from 'react';
import $ from 'jquery';
import musicState from '../recoils/music';
import { useRecoilState } from 'recoil';
import Underline from './Underline';
import Separate from './Separate';

function Options(props) {
    const [ music, setMusic ] = useRecoilState(musicState);

    const tracks = [
        "./music/track_01.mp3",
        "./music/track_02.mp3",
        "./music/track_03.mp3",
        "./music/track_04.mp3",
        "./music/track_05.mp3",
        "./music/track_06.mp3",
        "./music/track_07.mp3"
    ]

    const handlePlayRandomMusic = () => {
        let random = Math.floor(Math.random() * tracks.length);
        if (random === music.before && random === music.beforex2) {
            handlePlayRandomMusic();
        } else {
            setMusic({
                now: random,
                before: music.now,
                beforex2: music.before
            })
        }   
    }  

    useEffect(() => {
        $('#gameMusic').animate({ volume: 0.5 }, 1);

    })
        

    return (
        <div id="options">
            <div className="content">
                <h1>Opcje</h1>
                <Underline />
                <div className="content-options">
                    <h4>Muzyka:</h4>
                    <br />
                    <audio id="gameMusic" src={tracks[music.now]} onEnded={(end) => {
                        handlePlayRandomMusic();
                        setTimeout(() => {
                           if (end.target.paused === true) {
                               handlePlayRandomMusic();
                           } 
                        }, 2000);
                    }} autoPlay controls></audio>
                </div>
                <Separate />
            </div>
        </div>
    );
}
 
export default Options;