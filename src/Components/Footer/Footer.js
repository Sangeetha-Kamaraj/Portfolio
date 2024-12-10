import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={4} className="footer-copywright">
          <h3>Copyright © 2021</h3>
        </Col>
        <Col md={4} className="footer-copywright">
          <h3>Sangeetha Kamaraj</h3>
        </Col>
        <Col md={4} className="footer-body">
          <ul className="footer-icons">
            
            <li className="social-icons">
              <a
                href="https://github.com/Sangeetha-Kamaraj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/sangeetha-kamaraj/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
            </li>
           
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
