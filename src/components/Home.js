import React, { useContext } from 'react';
import './Home.css';
import Navbar from './Navbar.js'

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="book">
        <div className="front">
          <div className="cover">
            <h1 className="title-up">penn</h1>
            <h1 className="title-down">playbook</h1>
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
  );
}

export default Home;