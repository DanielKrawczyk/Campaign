import React, { useState } from 'react';
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import sounds from '../audio/bard';

function Item() {
    const equipment = useSelector(state => state.equipment);
    const gold = useSelector(state => state.gold);
    const dispatch = useDispatch();
    const [info, setInfo] = useState('');
    const [del, setDel] = useState();

    function handlePlaySound(id) {
        const { item, potion, bookOpen, gold, dagger, clothes, pageFlip } = sounds;
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

    function handleShowItemDesc(desc, item) {
        setInfo(desc);
        setDel(item);
        $('.info').addClass('show');
    }
 
    let i = 0;
        return (
            <React.Fragment>
                <div id="item">
                    <div className="content">
                        <div className="gold">
                            <h3>Dostępne złoto: {gold} <img src="./images/coin.png" className="coin" alt="Moneta"/></h3>
                        </div>
                        <div className="content-list">
                            {equipment.map(m => {let x = i; i++;
                                return <div key={m.name} className="content-list_item">
                                    <div onClick={() => {handlePlaySound(m.type, x);handleShowItemDesc(m.descr, m)}} className="content-list_item_frame">
                                        <div className="content-list_item_frame_pic">
                                            <img src="./images/minilogo.png" alt="obrazek" />
                                        </div>
                                        <div className="content-list_item_frame_name">
                                            <h4>{m.name} x{m.quantity}</h4>
                                            <small>Kliknij, by pokazać opis</small>
                                        </div>
                                        <div className="content-list_item_frame_info">
                                            <p><i className="bi bi-handbag"></i> {m.weight} kg</p>
                                            <p>{m.value} <img src="./images/coin.png" className="coin" alt="Moneta"/></p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="info">
                    <div className="content">
                        <div className="content-info">
                            <div className="content-info_pic">
                                <img src="./images/minilogo.png" alt="obrazek" width="200" height="200"/>
                            </div>
                            <div className="content-info_desc">
                                <p>&emsp;{info}</p>
                            </div>
                        </div>
                        <div className="content-info_buttons">
                            <button className="button-default" onClick={() => sounds.click.play()}>Użyj</button>
                            <button className="button-default" onClick={() => {sounds.click.play();handleThrowItemAway(del)}}>Wyrzuć przedmiot</button>
                            <button className="button-default" onClick={() => {sounds.click.play();$('.info').removeClass('show')}}>Zamknij</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
}
 
export default Item;