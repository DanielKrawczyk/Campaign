import React, { Component } from 'react';
import Item from './Item';
import Separate from './Separate';
import Underline from './Underline';

class Equipment extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="equipment">
                    <div className="content">
                        <h1>Ekwipunek</h1>
                        <Underline />
                        <Item />
                        <Separate />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Equipment;