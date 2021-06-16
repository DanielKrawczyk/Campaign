import React, { Component } from 'react';
import Equipment from './Equipment';
import Navbar from './Navbar';
import Story from './Story';
import WorldMap from './WorldMap';
import Hero from './Hero';
import Quests from './Quests';
import GoUp from './GoUp';
import Infobar from './Infobar';
import Options from './Options';

class Game extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Infobar />
                    <div className="container">
                        <Story />
                        <WorldMap />
                        <Equipment />
                        <Hero />
                        <Quests />
                        <Options />
                    </div>
                    <GoUp />
                </main>
            </React.Fragment>
        );
    }
}
 
export default Game;