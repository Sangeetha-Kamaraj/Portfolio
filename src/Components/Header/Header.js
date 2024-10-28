import React, { useState, useEffect } from "react";
import "./header.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineMessage } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function Header() {
  const [expand, setExpand] = useState(false);
  const [navColour, setNavColour] = useState(false);
  const [activeKey, setActiveKey] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setNavColour(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpand((prev) => !prev)}>
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey={activeKey}>
            {["/", "/about", "/projects", "/resume", "/contact"].map((path, index) => (
              <Nav.Item key={path}>
                <Nav.Link 
                  as={Link} 
                  to={path} 
                  onClick={() => { setExpand(false); setActiveKey(path); }} 
                  style={{ marginRight: '20px' }} // Adjust margin here
                >
                  {index === 0 && <AiOutlineHome className="icon" />}
                  {index === 1 && <AiOutlineUser className="icon" />}
                  {index === 2 && <AiOutlineFundProjectionScreen className="icon" />}
                  {index === 3 && <CgFileDocument className="icon" />}
                  {index === 4 && <AiOutlineMessage className="icon" />}
                  {index === 0 && ' Home'}
                  {index === 1 && ' About'}
                  {index === 2 && ' Projects'}
                  {index === 3 && ' Resume'}
                  {index === 4 && ' Contact'}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Sangeetha-Kamaraj"
                target="_blank"
                className="fork-btn-inner"
                style={{ marginLeft: '20px' }} // Adjust margin here
              >
                <CgGitFork className="icon" /> <AiFillStar className="icon" />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
