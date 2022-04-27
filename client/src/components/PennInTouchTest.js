import React, { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pennintouchActions } from '../redux/pennintouch-data';
import Draggable from 'react-draggable';



function PennInTouchTEST() {
    const data = useSelector((state) => state.pennintouchData.data);

    const [active, setActive] = useState({ active: false, x: 0, y: 0 })

    const [areaText, setAreaText] = useState("")

    const [isSubmitting, setIsSubmitting] = useState(false);

    const dispatch = useDispatch();


    function createText(e) {
        if (!active.active) {
            setActive({ active: true, x: e.clientX, y: e.clientY })
            console.log(e)
        }
    }

    function handleDrag(e) {
        if (!isSubmitting) {
            console.log(e)
            setActive({ active: true, x: e.x-e.offsetX, y: e.y-e.offsetY })
        }
    }

    function saveText(e) {
        var newText = {
            text: areaText,
            xpos: active.x,
            ypos: active.y,
            isEditing: false,
        }
        dispatch(pennintouchActions.addTextHandler(newText));
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
                        <button onClick={saveText} onMouseDown={() => setIsSubmitting(true)} onMouseUp={() => setIsSubmitting(false)}>hi</button>
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
                        <div style={{ color: "black", position: 'absolute', left: text.xpos, top: text.ypos }}>
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