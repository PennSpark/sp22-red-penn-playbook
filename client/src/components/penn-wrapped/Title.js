import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Title.css";


const Title = () => {
  return (
    <div className="title-pw-about">
      <div className="title-pw-about_container">
        <div class="year-container">
          <h1 className="year-top-h1">20</h1>
          <h1 className="year-bot-h1">22</h1>
        </div>
        <div class="pw-about-container">
          <h1 className="about-h1">Penn Wrapped</h1>
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

export default Title;
