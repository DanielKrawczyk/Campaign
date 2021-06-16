import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import $ from 'jquery';
import data from '../data/index';
import sounds from '../audio/bard';
import Underline from './Underline';
import Separate from './Separate';

function Story() {
    const stories = data.stories,
    [count, setCount] = useState(0),
    story = stories[count],
    store = useStore(),
    visited = useSelector(store => store.visited),
    dispatch = useDispatch();

    let text = '';
    let next = '';

    (function addNewStory() {
        switch(story.type) {
            case 'text':
                text = <p>&emsp;{story.text}</p>;
                next = addNextButtons(story.next);
                if (story.events) story.events.forEach(e => handleEventsInText(e));
                break;
            case 'dialogue':
                text = <p><i className="bi bi-chat-text"></i> <span className="dialogue">{story.who}: </span>{story.text}</p>;
                next = addNextButtons(story.next);
                if (story.events) story.events.forEach(e => handleEventsInText(e));
                break;
            case 'roll':
                text = <p>&emsp;{story.text}</p>;
                next = <a href="#story" onClick={() => {sounds.click.play();rollTheDice(story.difficulty, story.next.success, story.next.failure)}}><i className="bi bi-dice-5"></i> Rzut na {story.stat} o ST {story.difficulty}.</a>
                break;
            case 'location':
                text = <p>&emsp;{story.text}</p>;
                next = addNextButtons(story.next);
                break;
            case 'visit':
                text = <p>&emsp;{story.text}<br /><br />{prepareProperDialogue(story.who)}</p>;
                
                if (story.after) next = addNextButtons(story.next, story.after);
                else next = addNextButtons(story.next);

                if (story.events) story.events.forEach(e => handleEventsInText(e));
                break;
            case 'end':
                text = <p>&emsp;{story.text}</p>
                next = '';
                break;
            default:
                text = '';
                next = '';
                break;
        }
    })();

    function prepareProperDialogue(id) {
        const person = visited.find(f => f.id === id);
        const text = data.dialogues.find(f => f.type === person.type);

        if (person.visited === false) {
            return text.dialogue.first;
        } else {
            const { friendly, neutral, enemy } = text.dialogue
            switch(person.status) {
                case 'friendly':
                    return friendly[Math.floor(Math.random() * friendly.length)];
                case 'neutral':
                    return neutral[Math.floor(Math.random() * neutral.length)];
                case 'enemy':
                    return enemy[Math.floor(Math.random() * enemy.length)];
                default:
                    break;
            }
        }
    }

    function addNextButtons(arr, after = []) {
        if (arr === "default") return <a href="#story" onClick={() => {sounds.click.play();setCount(count + 1)}}>Dalej.</a>;
        return <ol>
            {arr.map((m) => {
                if (m.path) {
                    if (m.require) {
                        return handleCheckRequirements(m);
                    } else {
                        return <li key={m.text}>
                        <a href="#story" onClick={() => {sounds.click.play();setCount(m.path);after.forEach(e => handleEventsInText(e));}}>{m.text}</a>
                    </li>
                    }
                } else {
                    return <li key={m.text}>
                        <a href="#story" onClick={() => {sounds.click.play();setCount(count + 1);after.forEach(e => handleEventsInText(e));}}>{m.text}</a>
                    </li>
                }
            })}
        </ol>
    }

    function handleCheckRequirements(data) {
        const { require, path, text } = data;
        let quest;
        switch(require.type) {
            case 'item':
                const item = store.getState().equipment.find(f => f.id === require.id);
                if (item) {
                    return <li key={text}>
                        <a href="#story" onClick={() => {sounds.click.play();setCount(path)}}>{text}</a>
                    </li>
                } else {
                    return '';
                }
            case 'quest':
                break;
            case 'no_quest':
                quest = store.getState().quests.find(f => f.id === require.id);
                if (!quest) {
                    return <li key={text}>
                        <a href="#story" onClick={() => {sounds.click.play();setCount(path)}}>{text}</a>
                    </li>
                } else {
                    return '';
                }
            default:
                break;
        }
    }
    
    function rollTheDice(ST, good, bad) {
        const roll = Math.floor(Math.random() * 20);

        if (roll + 3 >= ST) {
            setCount(good);
        } else {
            setCount(bad);
        }
    }

    async function disp(x, y) {
        setTimeout(() => {
            dispatch({ type: x, data: y })
        }, 100);
    }

    function handleEventsInText(arr) {
        const 
            { type, id } = arr,
            hero_quests = store.getState().quests;
        let find_quest;


        switch(type) {
            case 'ADD_ITEM':
                disp(type, id)
                .then(() => disp('NEW_INFO_ITEM', id));
                break;
            case 'ADD_QUEST':
                disp(type, id)
                .then(() => disp('NEW_INFO_QUEST', id));
                break;
            case 'ADD_EFFECT':
                disp(type, id)
                .then(() => disp('NEW_INFO_EFFECT', id));
                break;
            case 'ADD_EXP':
                disp(type, arr.value)
                .then(() => disp('NEW_INFO_EXP', arr.value));
                break;
            case 'REMOVE_ITEM':
                disp(type, id);
                break;
            case 'UPDATE_QUEST':
                find_quest = hero_quests.find(f => f.id === id);
                disp(type, id)
                .then(() => {
                    const quest_exp = find_quest.stages[find_quest.current].exp;
                    if (quest_exp) disp('ADD_EXP', quest_exp);
                })
                .then(() => disp('NEW_INFO_QUEST_UPDATED', find_quest));
                break;
            case 'FINISH_QUEST':
                find_quest = hero_quests.find(f => f.id === id);
                disp(type, id)
                .then(() => disp('ADD_EXP', find_quest.exp))
                .then(() => disp('NEW_INFO_QUEST_FINISHED', find_quest));
                break;
            case 'REMOVE_EFFECT':
                disp(type, id);
                break;
            case 'PERSON_VISITED':
                disp(type, id);
                break;
            case 'IF=>QUEST_NOT_FINISHED=FAILURE':
                find_quest = hero_quests.find(f => f.id === id);
                if (find_quest.status === "active") {
                    disp('QUEST_FAILED', id)
                    .then(() => disp('NEW_INFO_QUEST_FAILED', find_quest));
                }
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        $('.nav').addClass('visible');

        setTimeout(() => {
            $('.content').addClass('visible');
        }, 1000);
        setTimeout(() => {
            $('.story-line').addClass('visible');
        }, 2000);
    })

        return (
            <React.Fragment>
                <div id="story">
                    <div className="content">
                        <div className="content-title">
                            <h1>Prolog</h1>
                        </div>
                        <Underline />
                        <div className="content-story">
                            <div className="story-line">{text}</div>
                            <div className="story-line">{next}</div>
                        </div>
                        <Separate />
                    </div>
                </div>
            </React.Fragment>
        );
}
 
export default Story;