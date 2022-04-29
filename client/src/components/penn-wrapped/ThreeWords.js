import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ThreeWords.scss";

import WordCloudImg from "./img/wordcloud2.png"

const ThreeWords = () => {
  return (
    <div className="pw-container tw-block">
      <div id="tw-text">
        <h1>This semester in 3 words...</h1>
        <p></p>
      </div>
      <img id="tw-img" src={WordCloudImg} />
    </div>
  );
};

export default ThreeWords;
