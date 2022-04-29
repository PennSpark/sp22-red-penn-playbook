import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './ClassXAbout.scss';
import { Button, Modal, Card, Col, Row, Container } from 'react-bootstrap';
import ClassXLineGraph from './ClassXLineGraph.js';
import ClassXBlockGraph from './ClassXBlockGraph';
import ClassXBarChart from './ClassXBarChart';

const ClassXAbout = () => {
  const values = [
    { name: "Abigail Norwillo", quote: "quote 1", link: "https://www.youtube.com/embed/dgZ3oO6NtNs", img: "https://cdn.arstechnica.net/wp-content/uploads/2021/05/catsquare3-640x426.jpg" },
    { name: "Abraham Frey", quote: "quote 2", link: "link2", img: "https://cdn.arstechnica.net/wp-content/uploads/2021/05/catsquare3-640x426.jpg" },
    { name: "Amanda Xu", quote: "quote 3", link: "https://www.youtube.com/embed/JoCNJAikWaY", img: "https://cdn.arstechnica.net/wp-content/uploads/2021/05/catsquare3-640x426.jpg" },
    { name: "Felicia Chen", quote: "\"Hope is a function of struggle—we develop hope not during the easy or comfortable times, but through adversity and discomfort.\" - Brené Brown", link: "https://www.youtube.com/embed/kmfsiRh8eQw", img: "https://drive.google.com/uc?export=view&id=1JcLBtVmU_hcGZFF5HO-_4zJUA0mfo6QC" },
    { name: "Grace Jiang", quote: "quote 5", link: "https://www.youtube.com/embed/0a-Mo2B4yFo", img: "https://cdn.arstechnica.net/wp-content/uploads/2021/05/catsquare3-640x426.jpg" },
    { name: "Matthew Jortberg", quote: "\"We're here to put a dent in the universe. Otherwise why else even be here?” - Steve Jobs", link: "https://www.youtube.com/embed/oRJORX-8Vpc", img: "https://drive.google.com/uc?export=view&id=1-JGJLU791OwYFxzrmUZAbKYlchK-O1LS" },
    { name: "Matthew Li", quote: "\"Life is for the living” - Dan Jai", link: "link7", img: "https://drive.google.com/uc?export=view&id=1YhgzK2u7s-fswLH4fUXrftyyc9nhCUWx" },
    { name: "Maya Patel", quote: "\"...People will forget what you said, people will forget what you did, but people will never forget how you made them feel.\" - Maya Angelou", link: "https://www.youtube.com/embed/bZHW30cW6Do", img: "https://drive.google.com/uc?export=view&id=1cCxU_r6Q8--N4dzkmpBkvQ2PCkO6m9ax" },
    { name: "Jashee Yang", quote: "quote 9", link: "link9", img: "https://cdn.arstechnica.net/wp-content/uploads/2021/05/catsquare3-640x426.jpg" },
    { name: "Jediah Katz", quote: "\"If youth was not wasted, how could it be youth?” – Viet Thanh Nguyen\"", link: "link10", img: "https://drive.google.com/uc?export=view&id=1qP7tazcWdbO4MiikmE33X_kgnwRC4cJm" },
  ];

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [senior, setSenior] = useState('');
  const [link, setLink] = useState('');

  function handleShow(breakpoint, name) {
    setFullscreen(breakpoint);
    setSenior(name)
    console.log(name)
    console.log(values.filter(x => x.name === name)[0]["link"])
    setLink(values.filter(x => x.name === name)[0]["link"])
    console.log(link)
    setShow(true);
    console.log(show)
  }

  return (
    <>
      <div>
        <div className="cx-active" />
        <div className="cx-about_container">
          <h1 className="about-h1">Class X</h1>
          <p className="about-p">
            10 seniors, 10 interviews, and 23 days of mood and energy tracking. This one’s for the class of 2022: the seniors who have made it through four years of Penn. Despite mostly entering in the same year, living in the same dorms, studying in the same spaces, and even joining many of the same groups, the Penn journey and experience looks wildly different for each of us. Each Class X member filled out a daily survey for three weeks asking about their day and also shared their experiences in a casual interview. Ultimately, Class X represents how there never was one answer or destination at Penn, and despite being adults about to enter the “real world”, we’re all still very much learning and growing.
          </p>
        </div>
      </div>
      <div className="cx-cards">
        <div className="row">
          {values.slice(0, 5).map((v) => (
            <>
              <div className="cx-card" onClick={() => handleShow(true, v.name)}>
                <img src={v.img} alt="Portrait of {v.name}" />
                <div className="cx-card-body">
                  <h2>{v.name}</h2>
                  <p>{v.quote}</p>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="row">
          {values.slice(5, 10).map((v) => (
            <>
              <div className="cx-card" onClick={() => handleShow(true, v.name)}>
                <img src={v.img} alt="Portrait of {v.name}" />
                <div className="cx-card-body">
                  <h2>{v.name}</h2>
                  <p>{v.quote}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>


      {show && <div class="cx-modal" fullscreen={fullscreen} >
        <div class="cx-modal-heading">
          <h1>{senior}</h1>
          <span class="close" onClick={() => setShow(false)}>&times;</span>
        </div>
        <div class="iframe-container">
          <iframe src={link} class="video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>}

      <div className="cx-about_container">
        <h1 className="about-h1">Mood + Energy + Sleep Through 23 Days</h1>
        <ClassXLineGraph />
        {/* <ClassXScatterPlot /> */}
        <ClassXBarChart />
      </div>
      {/* <ClassXBlockGraph /> */}

    </>

  );
}

export default ClassXAbout;