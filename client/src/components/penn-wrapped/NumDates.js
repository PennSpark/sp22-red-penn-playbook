import React, { useContext, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import './NumDates.scss';
import Frat0 from '../svg/frat0.svg';
import Frat3 from '../svg/frat3.svg';
import Frat6 from '../svg/frat6.svg';

const NumDates = () => {
    return (
        <div>
            <div class="nd-container">
            <h1>"How many frat parties did you go to?"</h1>
                <div class="fp-row">
                    <img src={Frat0} alt="28.1% have 1-3 close friends" />
                    <img src={Frat3} alt="44.5% have 4-6 close friends" />
                    <img src={Frat6} alt="16.4% have 7-9 close friends" />
                </div>
            </div>
        </div>
    );
}

export default NumDates;