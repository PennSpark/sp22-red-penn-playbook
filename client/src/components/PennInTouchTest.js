import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pennintouchActions } from '../redux/pennintouch-data';
import Draggable from 'react-draggable';
import axios from 'axios';



function PennInTouchTEST() {
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
    
    //const data = useSelector((state) => state.pennintouchData.data);
    
    const [active, setActive] = useState({ active: false, x: 0, y: 0 })

    const [areaText, setAreaText] = useState("")

    const [isSubmitting, setIsSubmitting] = useState(false);

    const dispatch = useDispatch();

    function createText(e) {
        if (!active.active) {
            setActive({ active: true, x: e.clientX, y: e.clientY })
        }
    }

    function handleDrag(e) {
        if (!isSubmitting) {
            setActive({ active: true, x: e.x-e.offsetX, y: e.y-e.offsetY })
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
                <Draggable id='dragObj' onStop={(e) => handleDrag(e)} defaultPosition={{ x: active.x, y: active.y }}>
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
        <div>
            <div style={{ height: '100vh', width: '100vw', position: 'absolute', zIndex: '1' }} onClick={(e) => createText(e)}>
                {data.map(function (text) {
                    return (
                        <div style={{ color: "black", position: 'absolute', left: text.xpos, top: text.ypos, whiteSpace: 'pre-wrap'}}>
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