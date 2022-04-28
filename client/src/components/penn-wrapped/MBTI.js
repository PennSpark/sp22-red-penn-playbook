import React, { useContext, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import './MBTI.css'

const MBTI = () => {
    return (
        <div>
            <div class="mbti-container">
                <h1>Our personality is</h1>
                <div class="trait-pair-container">
                    <div class="trait-container">
                        <h2>49%</h2>
                        <p>Extraverted (E)</p>
                    </div>
                    <div class="empty-bar">
                        <div class="bar-filler-1" />
                    </div>
                    <div class="trait-container">
                        <h2>51%</h2>
                        <p>Introverted (I)</p>
                    </div>
                </div>
                <div class="trait-pair-container">
                    <div class="trait-container">
                        <h2>76%</h2>
                        <p>Intuitive (N)</p>
                    </div>
                    <div class="empty-bar">
                        <div class="bar-filler-2" />
                    </div>
                    <div class="trait-container">
                        <h2>24%</h2>
                        <p>Observant (S)</p>
                    </div>
                </div>
                <div class="trait-pair-container">
                    <div class="trait-container">
                        <h2>44%</h2>
                        <p>Thinking (T)</p>
                    </div>
                    <div class="empty-bar">
                        <div class="bar-filler-3" />
                    </div>
                    <div class="trait-container">
                        <h2>56%</h2>
                        <p>Feeling (F)</p>
                    </div>
                </div>
                <div class="trait-pair-container">
                    <div class="trait-container">
                        <h2>56%</h2>
                        <p>Judging (J)</p>
                    </div>
                    <div class="empty-bar">
                        <div class="bar-filler-4" />
                    </div>
                    <div class="trait-container">
                        <h2>44%</h2>
                        <p>Prospecting (P)</p>
                    </div>
                </div>
                <a href='../../penn-wrapped/2'>View</a>
            </div>
        </div>
    );
}

export default MBTI;