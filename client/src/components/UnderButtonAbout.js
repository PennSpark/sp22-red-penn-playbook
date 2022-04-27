import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './UnderButtonAbout.css';
import { ReactComponent as LoginButton } from './svg/button-outline.svg';

const UnderButtonAbout = () => {
    return (
        <div>
            <div className="utb-active" />
            <div className="utb-about_container">
                <h1 className="about-h1">By the Button</h1>
                <LoginButton />
                <p className="utb-p">At the center of campus, the Button is a classic on Penn campus. It’s a place we joke about and usually don’t take very seriously at its obnoxiously center and bright location outside Van Pelt. By the Button doesn’t need to be taken very seriously either -  we have a few lighthearted questions in this quiz that tests how ~quirky~  you are in the Penn community. See how your responses compare to your peers by taking the quiz now!</p>
                <Link to='../../under-the-button'>
                    <button type="button" className="take-quiz">
                        Take quiz!
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default UnderButtonAbout;