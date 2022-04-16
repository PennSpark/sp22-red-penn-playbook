import React, { useRef, useEffect } from 'react';



const Canvas = props => {
    let canvasRef = useRef();
    
    useEffect(() => {
        let canvas = canvasRef.current;
        let context = canvas.getContext('2d');
        
        context.font = "30px Arial";
        context.fillText("hello world", 50, 50);
      });
      
      return <canvas ref={canvasRef} {...props}/>
}

export default Canvas;