import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './PennInTouchAbout.css';

const PenninTouchAbout = () => {
    return (
        <div className = "pit-container">
            <div className="pit-active" />
            <div className="pit-about_container">
                <h1 className="about-h1">Penn in Touch</h1>
                <p className="about-p">This is a space for confessions, celebrations, and everything in between.
                    This exhibition is still a work in progress, so be sure to check back soon!</p>
            </div>
        </div>
    );
}

export default PenninTouchAbout;