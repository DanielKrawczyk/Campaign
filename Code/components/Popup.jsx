import React, { Component } from 'react';

class Popup extends Component {
    state = {  }
    render() { 
        return (
            <div className="popup">
                <p onShow={this.props.handleShowInfo}></p>
            </div>
        );
    }
}
 
export default Popup;