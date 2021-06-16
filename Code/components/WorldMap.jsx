import React, { Component } from 'react';
import $ from 'jquery';
import Underline from './Underline';
import Separate from './Separate';

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
                    <button className="button-default" onClick={this.handleShowMap}>Pokaż mapę</button>
                    <Underline />
                    <div className="content-map">
                        <img src={this.state.map} className="worldmap" alt="" />
                    </div>
                    <Separate />
                </div>
            </div>
        );
    }
}
 
export default WorldMap;