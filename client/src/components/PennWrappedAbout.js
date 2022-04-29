import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PennWrappedAbout.css";
import { ReactComponent as RightArrow } from "./svg/rightArrow.svg";


const PennWrappedAbout = () => {
  const navigate = useNavigate()
  const start = () => {
        navigate(`../../penn-wrapped`);
  }
  return (
    <div className="pw-about">
      <div className="pw-active" />
      <div className="pw-about_container">
        <div class="year-container">
          <h1 className="year-top-h1">20</h1>
          <h1 className="year-bot-h1">22</h1>
        </div>
        <div class="pw-about-container">
          <h1 className="about-h1">Penn Wrapped</h1>
          <div class="start-container">
            <RightArrow />
            <button type="button" className="utb-about" onClick={() => start()}>Start</button> 
          </div>
          <p className="about-p">
            Inspired by Spotify Wrapped, Penn Wrapped is a compilation of survey
            data on the experiences of Penn students this semester. This
            exhibition is still a work in progress, so be sure to check back
            soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PennWrappedAbout;
