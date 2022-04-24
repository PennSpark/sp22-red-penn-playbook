import React, { useRef, useEffect } from 'react';



function PennInTouchTEST() {

    const DUMMY_DATA = [
        {
            id: 1, 
            text: 'Temporary test text',
            xpos: 0,
            ypos: 0,
            isEditing: false
        },
        {
            id: 2,
            text: 'Temporary test text 2',
            xpos: 50, 
            ypos: 50, 
            isEditing: true
        },
        {
            id: 3,
            text: 'Temporary test text 3',
            xpos: 150, 
            ypos: 150, 
            isEditing: true
        }
    ]
      
    return (
        <div>
            {DUMMY_DATA.map(function(text){
                return (
                    <div style={{color: "black", position: 'absolute', left: text.xpos, top: text.ypos}}>
                        {text.text}
                    </div>
                )
            })}
        </div>
    );
      
}

export default PennInTouchTEST;