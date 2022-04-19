import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeAbout.css';

const HomeAbout = () => {
    return (
        <div>
            <div className="home-active" />
            <div className="home-about_container">
                <h1 className="about-h1">About</h1>
                <p className="about-p">Spring of 2022 has been a whirlwind of classwork, conversations, and covid exposures for most of us, but as we reach the last few days of this semester we find ourselves wanting to take the time to look back and reflect on the moments that made the last couple months. </p>

<p className="about-p">    Penn Playbook is meant to be exactly what it sounds like - part play and part book. Through this digital exhibit, we hope to present an assemblage of snapshots and stories that paint a picture of life@penn this semester while allowing you to play around and interact with our site. </p>

<p className="about-p">    This project was an experimental undertaking by a Spark project team of developers and designers. Before we encourage you to take a look inside, we want to clarify that Penn Playbook is not all-encompassing, and while we aimed to collect data from diverse and large sample groups where relevant, the installations are not necessarily representative of the entire Penn population. Nonetheless, many students have contributed to or participated in helping us capture many different facets of Penn life and share personal stories that describe our Penn experiences. Thanks to the Spark community for the accountability and moral support, the friends who let us borrow camera equipment and showed us how to do videography for the first time, those of you who gave us feedback for every major idea, and everyone who filled out one of our many surveys. </p>

<p className="about-p">    Thanks for reading, and we hope you enjoy replaying the memories that defined this semester as much as we did!</p>
            </div>
        </div>
    );
}

export default HomeAbout;