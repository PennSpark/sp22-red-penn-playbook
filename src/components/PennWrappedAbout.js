import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './PennWrappedAbout.css';

const PennWrappedAbout = () => {
    return (
        <div>
            <div className="pw-active" />
            <div className="pw-about_container">
                <h1 className="about-h1">Penn Wrapped</h1>
                <p className="about-p">Inspired by Spotify Wrapped, Penn Wrapped is a compilation of survey data on the experiences of Penn students this semester.
                    This exhibition is still a work in progress, so be sure to check back soon!</p>
                <Link to='../../penn-wrapped/1'>
                    <a href='../../penn-wrapped/1'>View</a>
                </Link>
            </div>
        </div>
    );
}

export default PennWrappedAbout;