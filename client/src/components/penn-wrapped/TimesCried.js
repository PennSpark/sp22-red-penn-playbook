import React, { useContext, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import './TimesCried.scss';
import Frat0 from '../svg/frat0.svg';
import Frat3 from '../svg/frat3.svg';
import Frat6 from '../svg/frat6.svg';

const TimesCried = () => {
    return (
        <div className="pw-container">
            <div class="tc-container">
            <h1>"How many frat parties did you go to?"</h1>
            </div>
        </div>
    );
}

export default TimesCried;