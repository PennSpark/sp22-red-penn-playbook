import React, { useContext, useRef } from 'react';
import PennInTouchTest from './PennInTouchTest';

const PennInTouch = () => {
    const xoffset = useRef(0);
    const yoffset = useRef(0);

    const onScroll = (e) => {
        xoffset.current = e.target.scrollLeft; 
        yoffset.current = e.target.scrollTop;
    }
    return (
        <div className = "scroll-container" onScroll = {onScroll}>
            <div className = "big-scroll-container">
                <PennInTouchTest xoffset = { xoffset.current } yoffset = { yoffset.current }/>
            </div>
        </div>
    );
}

export default PennInTouch;