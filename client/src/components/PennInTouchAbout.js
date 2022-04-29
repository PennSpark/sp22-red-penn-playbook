import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './PennInTouchAbout.css';
import PennInTouch from './PennInTouchTest';

const PenninTouchAbout = () => {
    const navigate = useNavigate();
    const viewWall = () => {
        navigate('../../penn-in-touch');
    }
    return (
        <div className = "pit-container">
            <div className="pit-active" />
            <div className="pit-about_container">
                <h1 className="about-h1">Penn in Touch</h1>
                <p className="about-p">This is a space for confessions, celebrations, and everything in between. Read the messages of other Penn students across the Penn inTouch canvas, and leave your own thoughts as well. Please be respectful of everyone’s stories and take this canvas seriously as a safe place to share things that might be hard to say aloud.  </p>
                <div className="pit-link-container">
                    <button type="button" className="pit-viewWall" onClick={() => viewWall()}>View Wall</button>
                </div>
                <div className="pit-mobile-view">
                    <h2>Sorry, this exhibition is only available on Desktop view. Please try again on your computer!</h2>
                </div>
            </div>
        </div>
    );
}

export default PenninTouchAbout;