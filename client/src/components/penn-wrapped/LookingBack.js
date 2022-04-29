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
              <div style={{ height: "14%" }}>
                <p>14%</p>
                <div class="bar1" />
              </div>
              <div style={{ height: "39%" }}>
                <p>39%</p>
                <div class="bar2" />
              </div>
              <div style={{ height: "27%" }}>
                <p>27%</p>
                <div class="bar3" />
              </div>
              <div style={{ height: "50%" }} >
                <p>50%</p>
                <div class="bar4"/>
              </div>
              <div style={{ height: "16%" }} >
                <p>16% </p>
                <div class="bar5"/>
              </div>
            </div>
              <p>I know what I want to do in the future</p>
          </div>
          <div class="graph">
            <div class="bars">
              <div style={{ height: "9%" }}>
                <p>9%</p>
                <div class="bar1" />
              </div>
              <div style={{ height: "24%" }}>
                <p>24%</p>
                <div class="bar2" />
              </div>
              <div style={{ height: "31%" }}>
                <p>31%</p>
                <div class="bar3" />
              </div>
              <div style={{ height: "59%" }} >
                <p>59%</p>
                <div class="bar4"/>
              </div>
              <div style={{ height: "23%" }} >
                <p>23% </p>
                <div class="bar5"/>
              </div>
            </div>
            <p>I changed significantly this semester</p>
          </div>
          <div class="graph">
            <div class="bars">
              <div style={{ height: "17%" }}>
                  <p>17%</p>
                  <div class="bar1" />
                </div>
                <div style={{ height: "55%" }}>
                  <p>55%</p>
                  <div class="bar2" />
                </div>
                <div style={{ height: "25%" }}>
                  <p>25%</p>
                  <div class="bar3" />
                </div>
                <div style={{ height: "37%" }} >
                  <p>37%</p>
                  <div class="bar4"/>
                </div>
                <div style={{ height: "12%" }} >
                  <p>12% </p>
                  <div class="bar5"/>
                </div>
            </div>
            <p>I have no regrets about this semester</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingBack;
