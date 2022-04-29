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
                <h1>Number of time cried.</h1>
                <div class="graph-cry">
                    <div class="bars-cry">
                        <div class='bardiv-cry'>
                            <div class='label-cry'>
                                0
                            </div>
                            <div style={{ width: "14%" }}>
                                <div class="bar1">
                                    <p>14%</p>

                                </div>
                            </div>

                        </div>
                        <div class='bardiv-cry'>
                            <div class='label-cry'>1-3</div>
                            <div style={{ width: "39%" }}>

                                <div class="bar2">
                                    <p>39%</p>

                                </div>
                            </div>
                        </div>
                        <div class='bardiv-cry'>
                            <div class='label-cry'>4-6</div>
                            <div style={{ width: "27%" }}>

                                <div class="bar3">
                                    <p>27%</p>

                                </div>
                            </div>
                        </div>
                        <div class='bardiv-cry'>
                            <div class='label-cry'>7-9</div>
                            <div style={{ width: "50%" }} >

                                <div class="bar4">
                                    <p>50%</p>

                                </div>
                            </div>
                        </div>
                        <div class='bardiv-cry'>
                            <div class='label-cry'>10-12</div>
                            <div style={{ width: "16%" }} >

                                <div class="bar5">
                                    <p>16% </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimesCried;