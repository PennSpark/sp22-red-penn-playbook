import React, { useContext, useState } from "react";
import "./style.scss";

import CloseFriends from "./CloseFriends";
import FratParties from "./FratParties";
import LeastFavClass from "./LeastFavClass";
import LookingBack from "./LookingBack";
import MBTI from "./MBTI";
import NumDates from "./NumDates";
import RicePurity from "./RicePurity";
import TimesCried from "./TimesCried";

const PennWrapped = () => {
  return (
    <div className="pw-main-container">
      <div className="pw-container">
        <h1>HELLO</h1>
      </div>

      <CloseFriends />
      <FratParties />
      <LeastFavClass />
      <LookingBack />
      <MBTI />
      <NumDates />
      <RicePurity />
      <TimesCried />
    </div>
  );
};

export default PennWrapped;
