import React, { useState } from 'react';
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import sounds from '../audio/bard';
import Underline from './Underline';
import Separate from './Separate';

function Item() {
    const equipment = useSelector(state => state.equipment);
    const gold = useSelector(state => state.gold);
    const dispatch = useDispatch();
    const [info, setInfo] = useState("");
    const [del, setDel] = useState();

    function handlePlaySound(id) {
        const { item, potion, bookOpen, gold, dagger, clothes, pageFlip, ring, bow } = sounds;
        switch(id) {
            case 'item':
                item.play();
                break;
            case 'gold':
                gold.play();
                break;
            case 'potion':
                potion.play();
                break;
            case 'book':
                bookOpen.play();
                break;
            case 'dagger':
                dagger.play();
                break;
            case 'clothes':
                clothes.play();
                break;
            case 'paper':
                pageFlip.play();
                break;
            case 'ring':
                ring.play();
                break;
            case 'bow':
                bow.play();
                break;
            default:
                item.play();
        }
    }

    function handleThrowItemAway(item) {
        if (item.value === 0) {
            return window.alert('Nie możesz wyrzucić tego przedmiotu!')
        } else {
            const sure = window.confirm('Czy na pewno chcesz usunąć ten przedmiot z Twojego ekwipunku? Śmiecenie jest surowo zabronione dlatego przedmiot ulegnie zniszczeniu!');
            if (sure === true) {
                dispatch({ type: 'REMOVE_ITEM', data: item.id });
                sounds.destroy.play();
                $('.info').removeClass('show');
            }
        }
    }

    function handleShowItemDesc(item) {
        setInfo(item);
        setDel(item);
        $('.info').addClass('show');
    }

    function handleShowInfoBox(item) {
        setInfo(item);
        const elem = document.getElementById('info_box');

        elem.classList.remove('hidden');

        window.onmousemove = function(e) {
            const x = (e.clientX + 20) + "px",
                y = (e.clientY + 20) + "px";
    
            elem.style.top = y;
            elem.style.left = x;
        }

    }

    function handleHideInfoBox() {
        document.getElementById('info_box').classList.add('hidden');
    }
 
    let i = 0;
        return (
            <React.Fragment>
                <div id="item">
                <div className="content">
                        <div className="gold">
                            <h3>Dostępne złoto: {gold} <img src="./icons/gold.png" className="coin" alt="Moneta"/></h3>
                        </div>
                        <div className="content-list">
                            {equipment.map(m => {let x = i; i++;
                                return (
                                <div key={m.name} className="content-list_item">
                                    <div onMouseOut={() => handleHideInfoBox()} onMouseOver={() => handleShowInfoBox(m)} onClick={() => {handlePlaySound(m.type, x);handleShowItemDesc(m)}} className="content-list_item_frame">
                                        <div className="content-list_item_frame_pic">
                                            <img src={`./icons/${m.icon}.png`} alt="Ikona przedmiotu" />
                                        </div>
                                        <div className="content-list_item_frame_quantity">
                                            {m.quantity}
                                        </div>
                                    </div>
                                </div>)
                            })}
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="content">
                        <Underline />
                        <div className="content-info">
                            <div className="content-info_desc">
                                <p>&emsp;{info.descr}</p>
                            </div>
                            <div className="content-info_addon">

                            </div>
                        </div>
                        <div className="content-info_buttons">
                            <button className="button-default" onClick={() => sounds.click.play()}>Użyj</button>
                            <button className="button-default" onClick={() => {sounds.click.play();handleThrowItemAway(del)}}>Wyrzuć przedmiot</button>
                            <button className="button-default" onClick={() => {sounds.click.play();$('.info').removeClass('show')}}>Zamknij</button>
                        </div>
                        <Separate />
                    </div>
                </div>
                <div id="info_box" className="hidden">
                    <div className="content">
                        <div className="content-name">
                            <p><b>{info.name}</b> x{info.quantity}</p>
                            <small><i>Kliknij, by pokazać opis</i></small>
                        </div>
                        <div className="content-info">
                            <p><img src="./icons/weight.png" alt="Waga"/> {info.weight} kg</p>
                            <p><img src="./icons/gold.png" className="coin" alt="Moneta"/> {info.value}</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
}
 
export default Item;