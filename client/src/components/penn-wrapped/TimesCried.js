import React, { useContext, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import './TimesCried.scss';
import Wawa from './img/wawa.svg';
import VanPelt from './img/vp.svg';
import Love from './img/love.svg';
import College from './img/college.svg';
import Button from './img/button.svg';
import Tampons from './img/tampons.svg';

const TimesCried = () => {
    return (
        <div className="pw-container">
            <div class="tc-container">
            <h1>"How many frat parties did you go to?"</h1>
            <img src={Wawa} />
            <img src={VanPelt} />
            <img src={Love} />
            <img src={College} />
            <img src={Button} />
            <img src={Tampons} />
            </div>
        </div>
    );
}

export default TimesCried;