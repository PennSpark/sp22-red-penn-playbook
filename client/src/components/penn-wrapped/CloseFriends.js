import React, { useContext, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import './CloseFriends.scss';
import Friends0 from '../svg/friends0.svg';
import Friends1 from '../svg/friends1.svg';
import Friends4 from '../svg/friends4.svg';
import Friends7 from '../svg/friends7.svg';
import Friends10 from '../svg/friends10.svg';
import Friends16 from '../svg/friends16.svg';

const CloseFriends = () => {
    
    return (
        <div className="pw-container cf-big">
            <div className="cf-container">
                <div className="cf-lone">
                    <img src={Friends0} alt="2.7% have 0 close friends" />
                </div>
                <div className="cf-top-row">
                    <img src={Friends1} alt="28.1% have 1-3 close friends" />
                    <img src={Friends4} alt="44.5% have 4-6 close friends" />
                    <img src={Friends7} alt="16.4% have 7-9 close friends" />
                </div>
                <h1>"How many close friends do you have at Penn?"</h1>
                <div className="cf-bot-row">
                    <img src={Friends10} alt="4.8% have 10-12 close friends" />
                    <img src={Friends16} alt="3.4% have 16+ close friends" />
                </div>
            </div>
        </div>
    );
}

export default CloseFriends;