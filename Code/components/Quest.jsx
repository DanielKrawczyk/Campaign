import React, { useState } from 'react';
import { useSelector } from "react-redux";
import $ from 'jquery';
import sounds from '../audio/bard';

function Quest() {

    const quests = useSelector(state => state.quests);

    const [filter, setFilter] = useState('active');

    function handleShowQuestDesc(x) {
        if ($(`.quest-desc.${x}`).hasClass('show')) {
            $(`.quest-desc.${x}`).removeClass('show');
            sounds.bookClose.play();
        } else {
            $(`.quest-desc.${x}`).addClass('show');
            sounds.bookOpen.play();
        }
    }

    function showFilteredQuests() {
        if (filter === 'all') return quests;
        else return quests.filter(f => f.status === filter);
    }

    function setAsActive(el) {
        sounds.click.play();
        document.querySelectorAll('.content-quests_filter_item').forEach(e => e.classList.remove('active'));
        el.currentTarget.classList.add('active');
    }

    let i = 0;
    return (
        <React.Fragment>
            <div className="content-quests_filter">
                <span className="content-quests_filter_item active" onClick={el => {setFilter('active');setAsActive(el)}}>Aktywne</span>
                <span className="content-quests_filter_item" onClick={el => {setFilter('finished');setAsActive(el)}}>Ukończone</span>
                <span className="content-quests_filter_item" onClick={el => {setFilter('failed');setAsActive(el)}}>Nieudane</span>
                <span className="content-quests_filter_item" onClick={el => {setFilter('all');setAsActive(el)}}>Wszystkie</span>
            </div>
            <div className="content-quests_item">
                {showFilteredQuests().map(m =>{let x = i; i++;
                    return (
                    <div key={m.name} className="quest">
                        <div className="quest-name">
                            <h2 className={`quest-name_title ${m.status}`} onClick={() => handleShowQuestDesc(x)}>{m.name}</h2>
                        </div>
                        <div className={"quest-desc " + x}>
                            <p>{m.stages[m.current].text}</p>
                        </div>
                    </div>)
                })}
            </div>
        </React.Fragment>
    );
}
 
export default Quest;