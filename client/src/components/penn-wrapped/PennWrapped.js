import React, { useContext, useState } from "react";
import "./style.scss";

import ThreeWords from "./ThreeWords";
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
    <div className="pw-outer-container">
      <div className="pw-inner-container">
        <div className="pw-block"><NumDates /></div>
        <div className="pw-block"><RicePurity /></div>
        <div className="pw-block"><ThreeWords /></div>
        <div className="pw-block"><CloseFriends /></div>
        <div className="pw-block"><FratParties /></div>
        <div className="pw-block"><LeastFavClass /></div>
        <div className="pw-block"><LookingBack /></div>
        <div className="pw-block"><MBTI /></div>
        <div className="pw-block"><TimesCried /></div>
      </div>
    </div>
  );
};

export default PennWrapped;
