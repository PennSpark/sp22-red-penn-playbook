import React, { useContext } from 'react';
import './Home.css';
import HTMLFlipBook from 'react-pageflip';
import { Link } from 'react-router-dom'; 
import spark from './spark.png';

class Home extends React.Component {
    /*componentDidMount() {
      document.body.style.backgroundColor = "#3d3339";
    };*/

    render() {
    return (
    <div className="container">
      <div className="wholebook">
        <HTMLFlipBook width = {400} height = {550} showCover = {true} maxShadowOpacity = {0}>
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
            <img src={spark} className="spark"/>
          </div>
          <div className="rightpage"> 
            <div className="titlepage">
              <h1>Penn Playbook</h1>
              {/* <h1>Playbook</h1> */}
              <h3>subcaption</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
          <div className="leftpage"/>
          <div className="rightpage">
            <div className="toc">
              <h1>Table of Contents</h1>
              <Link to="/about/penn-playbook" className="link">About</Link>
              <br />
              <br />
              <Link to="/about/penn-wrapped" className="link">Penn Wrapped</Link>
              <br />
              <br />
              <Link to="/about/class-x" className="link">Class X</Link>
              <br />
              <br />
              <Link to="/about/penn-in-touch" className="link">Penn in Touch</Link>
              <br />
              <br />
              <Link to="/about/under-the-button" className="link">Under the Button</Link>
            </div>
          </div>
        </HTMLFlipBook>
      </div>
    </div>
    );
    }
}

export default Home;