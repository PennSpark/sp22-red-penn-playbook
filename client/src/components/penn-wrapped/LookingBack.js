import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./LookingBack.scss";

const LookingBack = () => {
  return (
    <div className="pw-container">
      {" "}
      <div class="lb-container">
        <div class="key">
          <div class="box1" />
          <p>Strongly disagree</p>
          <div class="box2" />
          <p>Disagree</p>
          <div class="box3" />
          <p>Neither agree nor disagree</p>
          <div class="box4" />
          <p>Agree</p>
          <div class="box5" />
          <p>Strongly agree</p>
        </div>
        <div class="graph-container">
          <div class="graph">
            <div class="bars">
              <div class="bar1" style={{ height: "14%" }} />
              <div class="bar2" style={{ height: "39%" }} />
              <div class="bar3" style={{ height: "27%" }} />
              <div class="bar4" style={{ height: "50%" }} />
              <div class="bar5" style={{ height: "16%" }} />
            </div>
            <p>I know what I want to do in the future</p>
          </div>
          <div class="graph">
            <div class="bars">
              <div class="bar1" style={{ height: "9%" }} />
              <div class="bar2" style={{ height: "24%" }} />
              <div class="bar3" style={{ height: "31%" }} />
              <div class="bar4" style={{ height: "59%" }} />
              <div class="bar5" style={{ height: "23%" }} />
            </div>
            <p>I changed significantly this semester</p>
          </div>
          <div class="graph">
            <div class="bars">
              <div class="bar1" style={{ height: "17%" }} />
              <div class="bar2" style={{ height: "55%" }} />
              <div class="bar3" style={{ height: "25%" }} />
              <div class="bar4" style={{ height: "37%" }} />
              <div class="bar5" style={{ height: "12%" }} />
            </div>
            <p>I have no regrets about this semester</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingBack;
