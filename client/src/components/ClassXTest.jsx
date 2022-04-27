import React, { useRef, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import './classx.css'
import buttonOutline from './svg/button.svg'


const ClassXTest = () => {

    function name(name) {
        return (
            <div style={{ height: '10vh', color: 'black', width: '50vw', position: "relative" }}>
                {name}
            </div>
        )
    }

    function pic(pic) {
        return (
            <div style={{ height: '80vh', color: 'red', width: '50vw' }}>
                <img src={buttonOutline}></img>
            </div>
        )
    }


    return (
        <div className="your-scroll-container" >
            <ParallaxProvider>
                <div style={{display:'flex'}}>
                <Parallax
                    translateY={["0vh", "400vh"]}
                >
                    {name('HI')}
                    {name('HI')}
                    {name('HI')}
                    {name('HI')}
                    {name('HI')}
                </Parallax>
                <Parallax
                    translateY={["150vh", "-150vh"]}
                    >
                    {pic('HI')}
                    {pic('HI')}
                    {pic('HI')}
                    {pic('HI')}
                    {pic('HI')}
                </Parallax>
                </div>
            </ParallaxProvider>
        </div>
    );


};

export default ClassXTest;