import React, { Component } from 'react';
import $ from 'jquery';

class WorldMap extends Component {
    state = {
        map: ''
    }

    handleShowMap = () => {
        let map;
        switch(this.state.map){
            case '':
                map = './images/map.jpg'
                this.setState({ map: map });
                $('.worldmap').addClass('show');
                break;
            default:
                map = '';
                this.setState({ map: map })
                $('.worldmap').removeClass('show');
        }
    }

    render() { 
        return (
            <div id="worldMap">
                <div className="content">
                    <button onClick={this.handleShowMap}>Pokaż mapę</button>
                    <br />
                    <img src={this.state.map} className="worldmap" alt=" " />
                </div>
            </div>
        );
    }
}
 
export default WorldMap;