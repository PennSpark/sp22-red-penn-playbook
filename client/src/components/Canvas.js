import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Canvas.css';




const Canvas = props => {
    let canvasRef = useRef();
    const loadedText = useSelector((state) => state.pennintouchData.data);

    useEffect(() => {
        let canvas = canvasRef.current;
        let context = canvas.getContext('2d');
        
        context.font = "30px Arial";
        for (const text of loadedText) {
            context.fillText(text.text, text.xpos, text.ypos);
        }
      });
      
      return (
        <div>
            <textarea>Hello</textarea>
            <canvas ref={canvasRef} {...props}/>
        </div>
      );
}

export default Canvas;