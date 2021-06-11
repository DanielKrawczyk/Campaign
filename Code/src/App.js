import React, { Component } from 'react';
import './styles/main.css';
import Start from './components/Start';
import Game from './components/Game';
import $ from 'jquery';
import sounds from './audio/bard';

class App extends Component {
    state = {
        view:0
    }
    
    handleNewGame = () => {
        $('.container').addClass('hide');
        sounds.pageFlip.play();
        $('#startMusic').animate({volume: 0}, 3000);

        setTimeout(() => {
            this.setState({ view: 1 })
            $('.container').removeClass('hide');
        }, 2000);
    }

    handleLoadGame = () => {
        sounds.sidebar.play();
        window.alert('Narazie niedostępne...');
    }
    
    states = [
        <Start onNewGame={this.handleNewGame} onLoadGame={this.handleLoadGame} />,
        <Game />
    ]

    render() { 
        return (
            <React.Fragment>
                {this.states[this.state.view]}
            </React.Fragment>
        );
    }
}

export default App;