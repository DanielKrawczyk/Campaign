import React, { Component } from 'react';
import $ from 'jquery';

class GoUp extends Component {
    state = {  }

    onScroll() {
        const navbar = document.getElementById('nav');
        const top = navbar.offsetTop;
    
        if (window.pageYOffset > top) {
            $('.goUp').addClass('visible');
        } else {
            $('.goUp').removeClass('visible');
        };
    };

    render() { 
        window.onscroll = () => this.onScroll();
        return (
            <div className="goUp" id="goUp">
                <h1><a href="#nav"><i className="bi bi-arrow-up-square"></i></a></h1>
            </div>
        );
    }
}
 
export default GoUp;