import React from 'react';
import { useSelector } from "react-redux";
import $ from 'jquery';
import sounds from '../audio/bard';

function Quest() {

    const quests = useSelector(state => state.quests);

    const handleShowQuestDesc = (x) => {
        if ($(`.quest-desc.${x}`).hasClass('show')) {
            $(`.quest-desc.${x}`).removeClass('show');
            sounds.bookClose.play();
        } else {
            $(`.quest-desc.${x}`).addClass('show');
            sounds.bookOpen.play();
        }
    }

        let i = 0;
        return (
            <React.Fragment>
                <div className="content-quests_item">
                    {quests.map(m =>{let x = i; i++;
                        return (
                        <div key={m.name} className="quest">
                            <div className="quest-name">
                                <h2 onClick={() => handleShowQuestDesc(x)}>{m.name}</h2>
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