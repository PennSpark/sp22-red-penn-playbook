import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './ClassXAbout.css';

const ClassXAbout = () => {
    return (
        <div>
            <div className="cx-active" />
            <div className="cx-about_container">
                <h1 className="about-h1">Class X</h1>
                <p className="about-p">10 seniors, 10 interviews, and 21 days of mood and energy tracking. This one’s for the class of 2022: the seniors who have made it through four years of Penn. This exhibition is still a work in progress, so be sure to check back soon!</p>
            </div>
        </div>
    );
}

export default ClassXAbout;