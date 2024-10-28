import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/home-main.svg";
import Particle from "../Components/Particles/Particle";
import SelfIntro from "../Components/SelfIntro/SelfIntro";
import TypeWriter from "../Components/TypeWriter/TypeWriter";

function Home() {
  return (
    <section style={{ padding: 0, margin: 0 }}>
      <Container fluid className="home-section" id="home" style={{ padding: 0, margin: 0 }}>
        <Particle />

        <Container className="home-content" style={{ padding: '20px 0', textAlign: 'center', marginTop: '-110px' }}> {/* Further increased negative margin */}
          <Row className="align-items-center" style={{ margin: 0 }}>
            <Col md={8} className="home-header" style={{ padding: 0 }}>
              <TypeWriter />
            </Col>

            <Col md={4} style={{ padding: 0 }}>
              <img 
                src={homeLogo} 
                alt="A representation of Sangeetha Kamaraj" 
                className="img-fluid" 
                style={{ 
                  borderRadius: "10px", 
                  maxHeight: '400px', 
                  width: '100%', 
                  objectFit: 'cover' 
                }} 
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Adjust SelfIntro margin */}
      <Container style={{ padding: '20px', textAlign: 'center', marginTop: '-20px' }}>
        <SelfIntro />
      </Container>
    </section>
  );
}

export default Home;
