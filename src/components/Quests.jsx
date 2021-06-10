import React, { Component } from 'react';
import Quest from './Quest';

class Quests extends Component {
    state = {}
    render() { 
        return (
            <React.Fragment>
                <div id="quests">
                    <div className="content">
                        <h1>Zadania:</h1>
                        <div className="content-underline">
                                <div className="content-underline_line"></div>
                                <div className="content-underline_symbol">
                                    <img src="./images/minilogo.png" alt="Logo D&D" />
                                </div>
                                <div className="content-underline_line"></div>
                        </div>
                        <div className="content-quests">
                            <Quest />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Quests;