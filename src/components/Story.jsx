import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import $ from 'jquery';
import * as data from '../data/story.json';
import sounds from '../audio/bard';
let equipment = [];

function Story() {
    const stories = data.Story;
    const [count, setCount] = useState(0);
    const story = stories[count];
    const dispatch = useDispatch();

    let text = '';
    let next = '';

    (function addNewStory() {
        switch(story[0]) {
            case 'text':
                text = <p>&emsp;{story[1]}</p>
                next = addNextButtons(story[2]);
                if (story[3]) handleEventsInText(story[3], story[4]);
                break;
            case 'dialogue':
                text = <p><i className="bi bi-chat-text"></i> <span className="dialogue">{story[1]}: </span>{story[2]}</p>
                next = addNextButtons(story[3]);
                if (story[4]) handleEventsInText(story[4], story[5]);
                break;
            case 'roll':
                text = <p>&emsp;{story[1]}</p>;
                next = <a href="#story" onClick={() => {sounds.click.play();rollTheDice(story[2], story[4][0], story[4][1])}}><i className="bi bi-dice-5"></i> Rzut na {story[3]} o ST {story[2]}.</a>
                break;
            case 'location':
                text = <p>&emsp;{story[1]}</p>;
                next = addNextButtons(story[2]);
                break;
            default:
                text = '';
                next = '';
                break;
        }
    })();


    function addNextButtons(arr) {
        return <ol>
            {arr.map((m) => {
                if (m[1]) {
                    if (m[2]) {
                        return handleCheckRequirements(m[2], m);
                    } else {
                        return <li key={m[0]}>
                        <a href="#story" onClick={() => {sounds.click.play();setCount(m[1])}}>{m[0]}</a>
                    </li>
                    }
                } else {
                    return <li key={m[0]}>
                        <a href="#story" onClick={() => {sounds.click.play();setCount(count + 1)}}>{m[0]}</a>
                    </li>
                }
            })}
        </ol>
    }

    function rollTheDice(ST, good, bad) {
        const roll = Math.floor(Math.random() * 20);

        if (roll + 3 > ST) {
            setCount(good);
        } else {
            setCount(bad);
        }
    }

    function handleCheckRequirements(type, data) {
        switch(type) {
            case 'item':
                const check = equipment.find(f => f.toString() === data[3].toString());
                if (check !== undefined) {
                    return <li key={data[0]}>
                        <a href="#story" onClick={() => {sounds.click.play();setCount(data[1])}}>{data[0]}</a>
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

    function handleEventsInText(type, data) {
        switch(type) {
            case 'ADD_ITEM':
                equipment.push(data);
                setTimeout(() => {
                    dispatch({ type: type, data: data });
                    setTimeout(() => {
                        dispatch({ type: 'NEW_INFO_ITEM', data: data })
                    }, 100);
                }, 100);
                break;
            case 'ADD_QUEST':
                setTimeout(() => {
                    dispatch({ type: type, data: data });
                    setTimeout(() => {
                        dispatch({ type: 'NEW_INFO_QUEST', data: data })
                        if (data[3]) {
                            setTimeout(() => {
                                equipment.push(data[3]);
                                dispatch({ type: 'ADD_ITEM', data: data[3] })
                            }, 100);
                        }
                    }, 100);
                }, 100);
                break;
            case 'ADD_EFFECT':
                setTimeout(() => {
                    dispatch({ type: type, data: data });
                    setTimeout(() => {
                        dispatch({ type: 'NEW_INFO_EFFECT', data: data })
                    }, 100);
                }, 100);
                break;
            case 'ADD_EXP':
                setTimeout(() => {
                    dispatch({ type: type, data: data })
                    setTimeout(() => {
                        dispatch({ type: 'NEW_INFO_EXP', data: data })
                    }, 100);
                }, 100);
                break;
            case 'REMOVE_ITEM':
                equipment = equipment.filter(f => f.toString() !== data.toString());
                setTimeout(() => {
                    dispatch({ type: type, data: data });
                }, 100);
                break;
            case 'remove-quest-success':
                setTimeout(() => {
                    dispatch({ type: 'REMOVE_QUEST', data: data });
                    if (data[3]) {
                        equipment = equipment.filter(f => f.toString() !== data[3].toString());
                        setTimeout(() => {
                            dispatch({ type: 'REMOVE_ITEM', data: data[3] })
                        }, 50);
                    }
                    setTimeout(() => {
                        dispatch({ type: 'ADD_EXP', data: data[2] });
                        setTimeout(() => {
                            dispatch({ type: 'NEW_INFO_EXP', data: data[2] })
                        }, 100);
                    }, 100);
                }, 100);
                break;
            case 'remove-quest-fail':
                setTimeout(() => {
                    dispatch({ type: 'REMOVE_QUEST', data: data });
                }, 100);
                break;
            case 'REMOVE_EFFECT':
                setTimeout(() => {
                    dispatch({ type: type, data: data });
                }, 100);
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