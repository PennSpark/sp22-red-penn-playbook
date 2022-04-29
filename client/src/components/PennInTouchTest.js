import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pennintouchActions } from '../redux/pennintouch-data';
import "./PennInTouchTest.css";
import Draggable from 'react-draggable';
import axios from 'axios';



const PennInTouchTEST = () => {
    useEffect(() => {
        window.scroll(0, 4 * window.innerHeight);
    }, []);

    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const resp = await axios.get('/api/texts')
            setData(resp.data);
        } catch(e) {
            alert('an error occurred')
        }
    }

    getData();
        
    const [active, setActive] = useState({ active: false, x: 0, y: 0 })

    const [areaText, setAreaText] = useState("")

    const [isSubmitting, setIsSubmitting] = useState(false);

    function createText(e) {
        if (!active.active) {
            setActive({ active: true, x: e.clientX + window.scrollX, y: e.clientY + window.scrollY })
        }
    }

    function handleDrag(e) {
        if (!isSubmitting) {
            setActive({ active: true, x: e.x-e.offsetX + window.scrollX, y: e.y-e.offsetY + window.scrollY })
        }
    }

    function saveText(e) {
        var newText = {
            text : areaText,
            xpos : active.x,
            ypos : active.y,
        }
        axios.post('/api/comment', newText)
        setActive({ active: false })
        setAreaText("")
    }

    function handleTextChange(e) {
        setAreaText(String(e.target.value))
    }

    function activeText() {
        if (active.active) {
            return (
                <Draggable id='dragObj' onStop={(e) => handleDrag(e)} defaultPosition={{ x: active.x, y: active.y}}>
                    <div>
                        <textarea value={areaText} onInput={(e) => handleTextChange(e)} style={{ color: "black", zIndex: '2' }}>
                        </textarea>
                        <button onClick={saveText} onMouseDown={() => setIsSubmitting(true)} onMouseUp={() => setIsSubmitting(false)}>place</button>
                    </div>
                </Draggable>
            )
        }
    }


    return (
        <div className = "pit-window">
            <div className="pit-large-container" onClick={(e) => createText(e)}>
                <div style={{ color : "black", position: 'absolute', top: (window.innerHeight / 2 * 9) - 100, width: '100vw', display: 'inline-block', whiteSpace: 'pre-wrap'}}>
                    <div className = "pit-title-container">
                        <p className = "pit-title">Penn In Touch</p>
                        <div className = "pit-instructions-container">
                            <p className = "pit-instructions">Welcome to Penn In Touch! This is a place for celebrations, confessions, and anything in between. Feel free to look around! To enter a story, click anywhere on the page and start typing. NOTE: Please manually shift+enter to create new lines as our website will automatically render everything in one line.</p>
                        </div>
                    </div>
                </div>
                {data.map(function (text) {
                    return (
                        <div style={{ color: "black", position: 'absolute', left: (text.xpos), top: (text.ypos), display: 'inline-block', whiteSpace: 'pre-wrap'}}>
                            {text.text}
                        </div>
                    )
                })}

                {activeText()}
            </div>
        </div>
    );


}

export default PennInTouchTEST;