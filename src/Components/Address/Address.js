import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./address.css";
import call from "../../Assets/contact.svg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Address() {
  return (
    <Container>
      <Row>
        <Col md={12} className="address">
          {/* You can add content here if needed */}
        </Col>

        <Col md={12} className="contact-image-container">
          <img
            className="contact-image"
            src={call}
            alt="Contact Phone Icon"
          />
        </Col>

        <Row>
          <Col md={6} className="contact-address">
            <h4>Phone Number</h4>
            <p>
              <AiOutlineWhatsApp /> +91 8778002883
            </p>
          </Col>
          <Col md={6} className="contact-address">
            <h4>Email Address</h4>
            <p>
              <AiOutlineMail /> k-sangeetha@outlook.com
            </p>
          </Col>
        </Row>

        <Col md={12} className="home-about-social">
          <h1>Contact Me</h1>
          <span>
            I am available on almost every social media. You can message me,
            and I will reply within 24 hours. I can help you with JavaScript,
            React, Node, and Open Source Development.
          </span>
          <br />
          <p>
            Feel free to <span className="purple">connect</span> with me
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/Sangeetha-Kamaraj"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                title="GitHub Profile"
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
                title="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/8778002883/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                title="WhatsApp"
              >
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/sangeetha.kamaraj.73/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
                title="Instagram Profile"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Address;
