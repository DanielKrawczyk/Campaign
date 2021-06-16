import React, { Component } from 'react';
import $ from 'jquery';
import Footer from './Footer';

class Start extends Component {
    componentDidMount() {
        $('#startMusic').animate({ volume: 0.5 }, 1);

        let time = 0;
        document.querySelectorAll('.start').forEach(el => {
            time++;
            setTimeout(() => {
                el.classList.add('visible');
            }, time * 1000);
        });
    }

    render() { 
        const { onNewGame, onLoadGame } = this.props;
        return (
            <React.Fragment>
                <div id="start" className="start">
                    <div className="container">
                        <div className="content">
                            <div className="content-title">
                                <h6 className="start">Kampania Dungeons <span className="colored">&</span> Dragons:</h6>
                                <h1 className="start">Oddech Mrozu</h1>
                            </div>
                            <div className="content-buttons start">
                                <div onClick={onNewGame} className="menu-button">
                                    <img className="mirror" src="./images/dragon.png" alt="Ikona smoka"/>
                                    <h4>Nowa gra</h4>
                                    <img src="./images/dragon.png" alt="Ikona smoka"/>
                                </div>
                                <div onClick={onLoadGame} className="menu-button">
                                    <img className="mirror" src="./images/dragon.png" alt="Ikona smoka"/>
                                    <h4>Wczytaj grę</h4>
                                    <img src="./images/dragon.png" alt="Ikona smoka"/>
                                </div>
                            </div>
                            <p className="start">Dla lepszych wrażeń z rozgrywki włącz autoodtwarzanie w przeglądarce.<br />Wskazane jest dobre połączenie z internetem.</p>
                            <audio id="startMusic" src="./music/title.mp3" autoPlay loop></audio>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}
 
export default Start;