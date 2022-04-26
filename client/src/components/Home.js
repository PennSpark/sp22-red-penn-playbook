import React, { useContext } from "react";
import "./Home.css";
import HTMLFlipBook from "react-pageflip";
import { Link } from "react-router-dom";
import spark from "./spark.png";

const Home = () => {
  return (
    <div className="container">
      <div className="wholebook">
        <HTMLFlipBook
          width={400}
          height={550}
          showCover={true}
          maxShadowOpacity={0}
        >
          <div className="coverpage">
            <div className="book">
              <div className="front">
                <div className="cover">
                  <h1 className="title-up">Penn</h1>
                  <h1 className="title-down">Playbook</h1>
                  <h3 className="author">Spark 2022</h3>
                </div>
              </div>
              <div className="left-side">
                <h2>
                  <span>Penn Playbook</span>
                  <span>Spark 2022</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="leftpage">
            <img src={spark} className="spark" />
          </div>
          <div className="rightpage">
            <div className="titlepage">
              <h1>Penn Playbook</h1>
              {/* <h1>Playbook</h1> */}
              <h3>2022</h3>
              <p>
                Spring of 2022 has been a whirlwind of classwork, conversations,
                and covid exposures for most of us, but as we reach the last few
                days of this semester we find ourselves wanting to take the time
                to look back and reflect on the moments that made the last
                couple months.{" "}
              </p>

              <p>
                Penn Playbook is meant to be exactly what it sounds like - part
                play and part book. Through this digital exhibit, we hope to
                present an assemblage of snapshots and stories that paint a
                picture of life@penn this semester while allowing you to play
                around and interact with our site.{" "}
              </p>
              <p>
                Thanks for reading, and we hope you enjoy replaying the memories
                that defined this semester as much as we did!
              </p>
            </div>
          </div>
          <div className="leftpage" />
          <div className="rightpage">
            <div className="toc">
              <h1>Table of Contents</h1>
              <Link to="/about/penn-playbook" className="link">
                About
              </Link>
              <br />
              <br />
              <Link to="/about/penn-wrapped" className="link">
                Penn Wrapped
              </Link>
              <br />
              <br />
              <Link to="/about/class-x" className="link">
                Class X
              </Link>
              <br />
              <br />
              <Link to="/about/penn-in-touch" className="link">
                Penn in Touch
              </Link>
              <br />
              <br />
              <Link to="/about/under-the-button" className="link">
                By the Button
              </Link>
            </div>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default Home;
