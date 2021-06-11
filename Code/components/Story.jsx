import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import $ from 'jquery';
import data from '../data/index';
import sounds from '../audio/bard';
let equipment = [];

function Story() {
    const stories = data.stories,
    quests = data.quests,
    [count, setCount] = useState(0),
    story = stories[count],
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


    function addNextButtons(arr) {
        if (arr === "default") return <a href="#story" onClick={() => {sounds.click.play();setCount(count + 1)}}>Dalej.</a>;
        return <ol>
            {arr.map((m) => {
                if (m.path) {
                    if (m.require) {
                        return handleCheckRequirements(m);
                    } else {
                        return <li key={m.text}>
                        <a href="#story" onClick={() => {sounds.click.play();setCount(m.path)}}>{m.text}</a>
                    </li>
                    }
                } else {
                    return <li key={m.text}>
                        <a href="#story" onClick={() => {sounds.click.play();setCount(count + 1)}}>{m.text}</a>
                    </li>
                }
            })}
        </ol>
    }

    function rollTheDice(ST, good, bad) {
        const roll = Math.floor(Math.random() * 20);

        if (roll + 3 >= ST) {
            setCount(good);
        } else {
            setCount(bad);
        }
    }

    function handleCheckRequirements(data) {
        const { require, path, text } = data;
        switch(require.type) {
            case 'item':
                const item = equipment.find(f => f.id === require.id);
                if (item) {
                    return <li key={text}>
                        <a href="#story" onClick={() => {sounds.click.play();setCount(path)}}>{text}</a>
                    </li>
                } else {
                    return '';
                }
            case 'quest':
                break;
            default:
                break;
        }
    }

    async function disp(x, y) {
        setTimeout(() => {
            dispatch({ type: x, data: y })
        }, 100);
    }

    function handleEventsInText(arr) {
        const { type, id } = arr;
        let find_item;
        let find_quest;

        switch(type) {
            case 'ADD_ITEM':
                find_item = data.items.find(f => f.id === id);
                equipment.push(find_item);
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
                equipment = equipment.filter(f => f.id !== id);
                disp(type, id);
                break;
            case 'remove-quest-success':
                find_quest = quests.find(f => f.id === id) 
                disp('REMOVE_QUEST', id)
                .then(() => disp('ADD_EXP', find_quest.exp))
                .then(() => disp('NEW_INFO_EXP', find_quest.exp));
                break;
            case 'remove-quest-fail':
                disp('REMOVE_QUEST', id);
                break;
            case 'REMOVE_EFFECT':
                disp(type, id);
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
                        <div className="content-underline">
                                <div className="content-underline_line"></div>
                                <div className="content-underline_symbol">
                                    <img src="./images/minilogo.png" alt="Logo D&D" />
                                </div>
                                <div className="content-underline_line"></div>
                        </div>
                        <div className="content-story">
                            <div className="story-line">{text}</div>
                            <div className="story-line">{next}</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
}
 
export default Story;