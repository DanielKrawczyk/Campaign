import React from 'react';
import { useSelector } from "react-redux";
import $ from 'jquery';
import sounds from '../audio/bard';


function Sidebar() {
    const equipment = useSelector(state => state.equipment);
    let weight = 0;
    equipment.forEach(e => weight += e.weight * e.quantity);

    const character = {
        HP: useSelector(state => state.hp),
        MaxHP: 8,
        PD: useSelector(state => state.exp),
        NextLVL: 5000,
        Weight: weight.toFixed(2),
        MaxWeight: 75,
        Effects: useSelector(state => state.effects)
    }


    const handleShowSidebar = () => {
        if($('.sideButton').hasClass('active') === true) {
            $('.sideButton').removeClass('active');
            $('.sidebar').removeClass('active');
            sounds.sidebar.play();
        } else {
            $('.sideButton').addClass('active');
            $('.sidebar').addClass('active');
            sounds.sidebar.play();
        }
    }

        const { HP, MaxHP, PD, NextLVL, Effects, Weight, MaxWeight } = character;
        return ( 
            <React.Fragment>
                <div className="sideButton">
                    <h1 onClick={handleShowSidebar}><i className="bi bi-caret-right-square"></i></h1>
                </div>
                <div className="sidebar">
                    <div className="sidebar-bars">
                        <div className="sidebar-bars_item">
                            <h4>Punkty wytrzymałości:</h4>
                            <p>{HP}/{MaxHP}</p>
                        </div>
                        <div className="sidebar-bars_item">
                            <h4>Doświadczenie:</h4>
                            <p>{PD}/{NextLVL}</p>
                        </div>
                        <div className="sidebar-bars_item">
                            <h4>Udźwig postaci:</h4>
                            <p>{Weight} / {MaxWeight} kg</p>
                        </div>
                        <div className="sidebar-bars_effects">
                            <h4>Aktywne efekty:</h4>
                            {Effects.map(m =>
                                <abbr key={m.name} title={m.descr}>{m.name}</abbr>
                            )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
}
 
export default Sidebar;