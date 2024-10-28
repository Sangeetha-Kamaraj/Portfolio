import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
        <Col md={12} style={{ textAlign: "center", paddingTop: "1em" }}>
          <img
            src="https://th.bing.com/th/id/R.c2398bf26082d84ee7f883ce5af080ec?rik=1Pn5RlsukwbbYg&riu=http%3a%2f%2ftalkroute.com%2fwp-content%2fuploads%2f2016%2f02%2fcustomer-care-talkroute-e1455208719494.png&ehk=pQFTVBmIiLl2HT1XiaZzfs9fukDk8Djo6irGMWeWYMM%3d&risl=&pid=ImgRaw&r=0" // A new image URL
            alt="Contact Icon"
            style={{ width: "50%", maxWidth: "300px", margin: "0 auto", display: "block" }}
          />
        </Col>

        <Col md={12} style={{ textAlign: "center", color: "#fff", padding: "1em 0" }}>
          <h1>Contact Me</h1>
        </Col>

        <Row style={{ textAlign: "center", color: "#fff", padding: "0.5em 0" }}>
          <Col md={6}>
            <h4>Phone Number</h4>
            <p>
              <AiOutlineWhatsApp /> +91 8778002883
            </p>
          </Col>
          <Col md={6}>
            <h4>Email Address</h4>
            <p>
              <AiOutlineMail /> k-sangeetha@outlook.com
            </p>
          </Col>
        </Row>

        <Col md={12} style={{ textAlign: "center", color: "#fff", padding: "1em 0" }}>
          <p>
            I am available on almost every social media. You can message me,
            and I will reply within 24 hours. I can help you with JavaScript,
            React, Node, and Open Source Development.
          </p>
          <p>
            Feel free to <span style={{ color: "#ff0055" }}>connect</span> with me.
          </p>
        </Col>

        <Col md={12} style={{ textAlign: "center", padding: "1em 0" }}>
          <ul style={{ display: "flex", justifyContent: "center", listStyleType: "none", padding: 0 }}>
            <li style={{ margin: "0 10px" }}>
              <a href="https://github.com/Sangeetha-Kamaraj" target="_blank" rel="noreferrer" title="GitHub Profile">
                <AiFillGithub />
              </a>
            </li>
            <li style={{ margin: "0 10px" }}>
              <a href="http://www.linkedin.com/in/sangeetha-kamaraj" target="_blank" rel="noreferrer" title="LinkedIn Profile">
                <FaLinkedinIn />
              </a>
            </li>
            <li style={{ margin: "0 10px" }}>
              <a href="https://wa.me/8778002883/" target="_blank" rel="noreferrer" title="WhatsApp">
                <AiOutlineWhatsApp />
              </a>
            </li>
            <li style={{ margin: "0 10px" }}>
              <a href="https://www.instagram.com/sangeetha.kamaraj.73/" target="_blank" rel="noreferrer" title="Instagram Profile">
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