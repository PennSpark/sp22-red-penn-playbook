import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './ClassXAbout.css';
import {Button, Modal, Card, Col, Row, Container} from 'react-bootstrap';
import ClassXLineGraph from './ClassXLineGraph';

const ClassXAbout = () => {
  const values = [
    {name: "Abigail Norwillo", quote: "quote 1", link: "link1"}, 
    {name: "Abraham Frey", quote: "quote 2", link: "link2"}, 
    {name: "Amanda Xu", quote: "quote 3", link: "link3"}, 
    {name: "Felicia Chen", quote: "quote 4", link: "link4"}, 
    {name: "Grace Jiang", quote: "quote 5", link: "link5"}, 
    {name: "Matthew Jortberg", quote: "quote 6", link: "link6"}, 
    {name: "Matthew Li", quote: "quote 7", link: "link7"}, 
    {name: "Maya Patel", quote: "quote 8", link: "link8"}, 
    {name: "Jashee Yang", quote: "quote 9", link: "link9"}, 
    {name: "Jediah Katz", quote: "quote 10", link: "link10"}, 
  ];

  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [senior, setSenior] = useState(false);

  function handleShow(breakpoint, name) {
    setFullscreen(breakpoint);
    setSenior(name)
    setShow(true);
  }

    return (
<<<<<<< HEAD:src/components/ClassXAbout.js
        <>
        <div>
=======
        <div className="cs-container">
>>>>>>> c9fa17d9d959f13acf4246d9292f02014ce9c638:client/src/components/ClassXAbout.js
            <div className="cx-active" />
            <div className="cx-about_container">
                <h1 className="about-h1">Class X</h1>
                <p className="about-p">
                10 seniors, 10 interviews, and 23 days of mood and energy tracking. This one’s for the class of 2022: the seniors who have made it through four years of Penn. Despite mostly entering in the same year, living in the same dorms, studying in the same spaces, and even joining many of the same groups, the Penn journey and experience looks wildly different for each of us. Each Class X member filled out a daily survey for three weeks asking about their day and also shared their experiences in a casual interview. Ultimately, Class X represents how there never was one answer or destination at Penn, and despite being adults about to enter the “real world”, we’re all still very much learning and growing.
                </p>

                </div>

                
  <Row style={{ backgroundColor: "#ebebeb"}}>
      {values.map((v) => (
        <>
        <Col sm={3}>
        <Card style={{ width: '18rem', marginBottom: '2rem', marginLeft: '3rem'}} onClick={() => handleShow(true, v.name)} className='user-card'>
        <Card.Img variant="top" src="https://cdn.arstechnica.net/wp-content/uploads/2021/05/catsquare3-640x426.jpg" />
        <Card.Body>
          <Card.Title className="about-h1">{v.name}</Card.Title>
          <Card.Text> {v.quote}</Card.Text>
        </Card.Body>
      </Card>
      </Col>
     
      </>
      ))}
        </Row>

      
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="about-h1">{senior}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="99%" height="99%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Modal.Body>
      </Modal>
      <div className="cx-about_container">
      <h1 className="about-h1">Mood + Energy + Sleep Through 23 Days</h1>
      <ClassXLineGraph/>
      </div>
      </div>
    </>

    );
}

export default ClassXAbout;