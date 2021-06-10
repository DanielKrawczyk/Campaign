import React, { Component } from 'react';
import $ from 'jquery';

class Start extends Component {
    componentDidMount() {
        $('#startMusic').animate({ volume: 0.5 }, 1);
        let i = 1;
        setTimeout(() => {
            $('#start').addClass('visible');
        }, 1000);
        setTimeout(() => {
            $(`#start-${i}`).addClass('visible');
            i++;
        }, 2000);
        setTimeout(() => {
            $(`#start-${i}`).addClass('visible');
            i++;
        }, 3000);
        setTimeout(() => {
            $(`#start-${i}`).addClass('visible');
            i++;
        }, 4000);
        setTimeout(() => {
            $(`#start-${i}`).addClass('visible');
        }, 5000);
    }

    render() { 
        const { onNewGame, onLoadGame } = this.props;
        return (
            <React.Fragment>
                <div id="start" className="start">
                    <div className="container">
                        <div className="content">
                            <div className="content-title">
                                <h6 className="start" id="start-1">Kampania Dungeons <span className="colored">&</span> Dragons:</h6>
                                <h1 className="start" id="start-2">Oddech Mrozu</h1>
                            </div>
                            <div className="content-buttons start" id="start-3">
                                <div className="menu-button">
                                    <img src="./images/dragon.png" alt="Ikona smoka"/>
                                    <button onClick={onNewGame}>Nowa gra</button>
                                </div>
                                <div className="menu-button">
                                    <img src="./images/dragon.png" alt="Ikona smoka"/>
                                    <button onClick={onLoadGame}>Wczytaj grę</button>
                                </div>
                            </div>
                            <p className="start" id="start-4">Dla lepszych wrażeń z rozgrywki włącz autoodtwarzanie w przeglądarce.<br />Wskazane jest dobre połączenie z internetem.</p>
                            <audio id="startMusic" src="./music/title.mp3" autoPlay loop></audio>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Start;