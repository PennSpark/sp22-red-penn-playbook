import React, { useRef, useEffect } from 'react';



const Canvas = props => {
    let canvasRef = useRef();
    
    useEffect(() => {
        let canvas = canvasRef.current;
        let context = canvas.getContext('2d');
        //Our first draw
        context.beginPath();
        context.arc(50, 50, 50, 0, 2 * Math.PI);
        context.fill();
      });
      
      return <canvas ref={canvasRef} {...props}/>
}

export default Canvas;