import React, { Component } from 'react';
import Item from './Item';

class Equipment extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="equipment">
                    <div className="content">
                        <h1>Ekwipunek</h1>
                        <div className="content-underline">
                            <div className="content-underline_line"></div>
                            <div className="content-underline_symbol">
                                <img src="./images/minilogo.png" alt="Logo D&D" />
                            </div>
                            <div className="content-underline_line"></div>
                        </div>
                        <Item />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Equipment;