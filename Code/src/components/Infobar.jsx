import React from 'react';
import { useSelector } from 'react-redux';
import $ from 'jquery';
import sounds from '../audio/bard';

function Infobar() {
    let bar = '';
    let href = '';
    let info = '';

    const state = useSelector(state => state.info);

    switch(state.type) {
        case 'quest':
            bar = 'Dodano nowe zadanie: ';
            href = '#quests';
            info = state.info.name;
            handleShowNewInfo();
            break;
        case 'effect':
            bar = 'Postać otrzymuje: ';
            href = '#nav';
            info = state.info.name;
            handleShowNewInfo();
            break;
        case 'item':
            bar = 'Dodano do ekwipunku: ';
            href = '#equipment';
            info = state.info.name;
            handleShowNewInfo();
            break;
        case 'exp':
            bar = 'Otrzymano PD: ';
            href = '#story';
            info = state.info;
            handleShowNewInfo();
            break;
        default:
            break;
    }

    function handleShowNewInfo() {
        $('#infobar').removeClass('hidden');
        $('#infobar').addClass('active');
        sounds.newInfo.play();
            
        setTimeout(() => {
            if($('#infobar').hasClass('active') === true) {
                $('#infobar').removeClass('active');
                sounds.pageFlip.play();
            }
        }, 5500);
    }

    const handleShowInfobar = () => {
        if ($('#infobar').hasClass('active') === true) {
            $('#infobar').removeClass('active');
        } else {
            $('#infobar').addClass('active');
        }
        sounds.pageFlip.play();
    }

    const handleHideInfobar = () => {
        sounds.pageFlip.play();
        $('#infobar').removeClass('active');
        $('#infobar').addClass('hidden');
    }

        return (
            <div id="infobar" className="hidden">
                <p>{bar}<b><a href={href} onClick={handleHideInfobar}>{info}</a></b><i  onClick={handleShowInfobar} className="bi bi-caret-right"></i></p>
            </div>
        );
}
 
export default Infobar;