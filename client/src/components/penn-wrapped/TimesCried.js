import React, { useContext, useState } from 'react'
import { useParams, Link } from "react-router-dom"
import './TimesCried.scss';
import Wawa from './img/wawa.png';
import WawaFlip from './img/wawa-flip.png';
import VanPelt from './img/vp.png';
import VanPeltFlip from './img/vp-flip.png';
import Love from './img/love.png';
import LoveFlip from './img/love-flip.png';
import College from './img/college.png';
import CollegeFlip from './img/college-flip.png';
import Button from './img/button.png';
import ButtonFlip from './img/button-flip.png';
import Tampons from './img/tampons.png';
import TamponsFlip from './img/tampons-flip.png';

const TimesCried = () => {
    return (
        <div className="pw-container">
            <div class="tc-container">
                <div class="graph-cry">
                    <h1>How many times did you cry this semester?</h1>
                    <div class="bars-cry">
                        <div class='bardiv-cry'>
                            <div class='label-cry'>
                                0
                            </div>
                            <div class="bar1">

                                <p>12%</p>


                            </div>

                        </div>
                        <div class='bardiv-cry'>
                            <div class='label-cry'>1-3</div>


                            <div class="bar2">
                                <p>36%</p>


                            </div>
                        </div>
                        <div class='bardiv-cry'>
                            <div class='label-cry'>4-6</div>


                            <div class="bar3">
                                <p>21%</p>


                            </div>
                        </div>
                        <div class='bardiv-cry'>
                            <div class='label-cry'>7-9</div>


                            <div class="bar4">
                                <p>9%</p>


                            </div>
                        </div>
                        <div class='bardiv-cry'>
                            <div class='label-cry'>10-12</div>

                            <div class="bar5">
                                <p>5% </p>

                            </div>
                        </div>
                        <div class='bardiv-cry'>
                            <div class='label-cry'>13+</div>


                            <div class="bar6">
                                <p>17% </p>


                            </div>
                        </div>
                    </div>
                </div>
                <div class="cry-locations">
                    <h1>Which reason has made you cry the most?</h1>
                    <div class="img-row">
                        <div class="image-wrapper-wawa"><img src={Wawa} id="wawa" /><img src={WawaFlip} id="wawa-flip" /></div>
                        <div class="image-wrapper-vp"><img src={VanPelt} id="vp" /><img src={VanPeltFlip} id="vp-flip" /></div>
                    </div>
                    <div class="img-row">
                        <div class="image-wrapper-love"><img src={Love} id="love" /><img src={LoveFlip} id="love-flip" /></div>
                        <div class="image-wrapper-college"><img src={College} id="college" /><img src={CollegeFlip} id="college-flip" /></div>
                    </div>
                    <div class="img-row">
                        <div class="image-wrapper-button"><img src={Button} id="button" /><img src={ButtonFlip} id="button-flip" /></div>
                        <div class="image-wrapper-tampons"><img src={Tampons} id="tampons" /><img src={TamponsFlip} id="tampons-flip" /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimesCried;