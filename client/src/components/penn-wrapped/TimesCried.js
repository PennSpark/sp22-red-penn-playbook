import React, { useContext, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import './TimesCried.scss';
import Wawa from './img/wawa.png';
import VanPelt from './img/vp.png';
import Love from './img/love.png';
import College from './img/college.png';
import Button from './img/button.png';
import Tampons from './img/tampons.png';

const TimesCried = () => {
    return (
        <div className="pw-container">
            <div class="tc-container">
                <div class="graph-cry">
                    <h1>Number of time cried.</h1>
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
                <div class="cry-locations">
                    <h1>Reason for cry</h1>
                    <div class="img-row">
                        <img src={Wawa} />
                        <img src={VanPelt} />
                    </div>
                    <div class="img-row">
                        <img src={Love} id="love" />
                        <img src={College} id="college" />
                    </div>
                    <div class="img-row">
                        <img src={Button} />
                        <img src={Tampons} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimesCried;