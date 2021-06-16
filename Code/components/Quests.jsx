import React, { Component } from 'react';
import Quest from './Quest';
import Underline from './Underline';
import Separate from './Separate';

class Quests extends Component {
    render() { 
        return (
            <React.Fragment>
                <div id="quests">
                    <div className="content">
                        <h1>Zadania:</h1>
                        <Underline />
                        <div className="content-quests">
                            <Quest />
                        </div>
                        <Separate />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Quests;