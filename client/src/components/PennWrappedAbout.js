import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './PennWrappedAbout.css';
import { ReactComponent as RightArrow } from './svg/rightArrow.svg';

import PennWrapped from './penn-wrapped/PennWrapped';

const PennWrappedAbout = () => {
    return (
        <div className="pw-about">
            <div className="pw-active" />
            <div className="pw-about_container">
                <div class="year-container">
                    <h1 className="year-top-h1">20</h1>
                    <h1 className="year-bot-h1">22</h1>
                </div>
                <div class="pw-about-container">
                    <h1 className="about-h1">Penn Wrapped</h1>
                    <RightArrow />
                    <p className="about-p">Inspired by Spotify Wrapped, Penn Wrapped is a compilation of survey data on the experiences of Penn students this semester.
                        This exhibition is still a work in progress, so be sure to check back soon!</p>
                </div>

                
            </div>
            <PennWrapped />
        </div>
    );
}

export default PennWrappedAbout;