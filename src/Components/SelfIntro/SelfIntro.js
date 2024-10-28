import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Update this URL to your new girl logo image
const myImg = "https://fabulouseyebrowthreading.com/wp-content/uploads/2022/01/pp.png";

function SelfIntro() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I’m passionate about programming and have been on an exciting learning journey. 🤷‍♂️
              <br />
              <br />
              I have a solid foundation in technologies like <b className="purple">React, Node.js, and JavaScript</b>,
              which I leverage to create innovative solutions.
              <br />
              <br />
              I’m particularly interested in <b className="purple">Web Technologies</b> and thrive on developing
              <b className="purple"> full-stack projects</b> that challenge my skills.
              <br />
              <br />
              My goal is to build exceptional products using <b className="purple">Node.js</b> alongside modern frameworks
              like <b className="purple">React.js</b> and <b className="purple">Express.js</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sangeetha-Kamaraj"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="http://www.linkedin.com/in/sangeetha-kamaraj"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/sangeetha.kamaraj.73/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default SelfIntro;
