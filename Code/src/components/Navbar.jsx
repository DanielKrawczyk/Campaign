import React, { Component } from 'react';
import $ from 'jquery';
import Sidebar from './Sidebar';
import sounds from '../audio/bard';

class Navbar extends Component {
    state = {}

    handleShowNavbar = () => {
        if ($('.nav').hasClass('show') === true) {
            $('.nav').removeClass('show');
            $('.nav-button').removeClass('show');
            sounds.sidebar.play();
        } else {
            $('.nav').addClass('show');
            $('.nav-button').addClass('show');
            sounds.sidebar.play();
        }
    }

    render() { 
        return (
            <React.Fragment>
                <div id="nav"></div>
                <div className="nav">
                    <div className="nav-bar">
                        <div className="nav-bar_item">
                            <a onClick={() => sounds.click.play()} href="#worldMap"><img className="minilogo" src="./images/minilogo.png" alt="Logo D&D" />Mapa świata</a>
                        </div>
                        <div className="nav-bar_item">
                            <a onClick={() => sounds.click.play()} href="#equipment"><img className="minilogo" src="./images/minilogo.png" alt="Logo D&D" />Ekwipunek</a>
                        </div>
                        <div className="nav-bar_item">
                            <a onClick={() => sounds.click.play()} href="#hero"><img className="minilogo" src="./images/minilogo.png" alt="Logo D&D" />Postać</a>
                        </div>
                        <div className="nav-bar_item">
                            <a onClick={() => sounds.click.play()} href="#quests"><img className="minilogo" src="./images/minilogo.png" alt="Logo D&D" />Zadania</a>
                        </div>
                        <div className="nav-bar_item">
                            <a onClick={() => sounds.click.play()} href="#quests"><img className="minilogo" src="./images/minilogo.png" alt="Logo D&D" />Opcje</a>
                        </div>
                    </div>
                </div>
                <div className="nav-button">
                    <h1 onClick={this.handleShowNavbar}><i className="bi bi-caret-right-square"></i></h1>
                </div>
                <Sidebar />
            </React.Fragment>
        );
    }
}
 
export default Navbar;