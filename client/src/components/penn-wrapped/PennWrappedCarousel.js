import { useState } from "react";
import "./PennWrappedCarousel.scss";
import Title from "./Title";
import ThreeWords from "./ThreeWords";
import CloseFriends from "./CloseFriends";
import FratParties from "./FratParties";
import LookingBack from "./LookingBack";
import MBTI from "./MBTI";
import NumDates from "./NumDates";
import RicePurity from "./RicePurity";
import TimesCried from "./TimesCried";
import arrow from "./arrow.png";


export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "Title",
    },
    {
      id: "NumDates",
    },
    {
      id: "RicePurity",
    },
    {
        id: "ThreeWords",
    },
    {
        id: "CloseFriends",
    },
    {
        id: "FratParties",
    },
    {
        id: "LookingBack"
    },
    {
        id: "MBTI",
    },
    {
        id: "TimesCried",
    }
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 8)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              {d.id == "Title" && <Title  />}
              {d.id == "NumDates" && <NumDates slide={currentSlide}/>}
              {d.id == "RicePurity" && <RicePurity slide={currentSlide}/>}
              {d.id == "ThreeWords" && <ThreeWords />}
              {d.id == "CloseFriends" && <CloseFriends />}
              {d.id == "FratParties" && <FratParties />}
              {d.id == "LookingBack" && <LookingBack />}
              {d.id == "MBTI" && <MBTI />}
              {d.id == "TimesCried" && <TimesCried />}
            </div>
          </div>
        ))}
      </div>
      <div class="helper-left">
        <img
            src= {arrow}
            className="arrow left"
            alt=""
            onClick={() => handleClick("left")}
        />
      </div>
      <div class="helper-right">
      <img
        src={arrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
      </div>
    </div>
  );
}