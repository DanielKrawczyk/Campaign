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
            buildInfobar('Dodano nowe zadanie: ', '#quests', state.info.name);
            break;
        case 'effect':
            buildInfobar('Postać otrzymuje: ', '#nav', state.info.name);
            break;
        case 'item':
            buildInfobar('Dodano do ekwipunku: ', '#equipment', state.info.name);
            break;
        case 'exp':
            buildInfobar('Otrzymano PD: ', '#story', state.info);
            break;
        case 'quest_finished':
            buildInfobar('Zakończono zadanie: ', '#quests', state.info.name);
            break;
        case 'quest_updated':
            buildInfobar('Zaktualizowano zadanie: ', '#quests', state.info.name);
            break;
        case 'quest_failed':
            buildInfobar('Zadanie anulowane: ', '#quests', state.info.name);
            break;
        default:
            break;
    }

    function buildInfobar(text_1, a, text_2) {
        bar = text_1;
        href = a;
        info = text_2;
        handleShowNewInfo();
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
        if ($('#infobar').hasClass('active')) {
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
                <p>
                    {bar}
                    <b><a href={href} onClick={handleHideInfobar}>{info}</a></b>
                    <i onClick={handleShowInfobar} className="bi bi-caret-right"></i>
                </p>
            </div>
        );
}
 
export default Infobar;