import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../Components/ProjectCards/ProjectCards";
import Particle from "../Components/Particles/Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", marginBottom: "30px" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center" }}>
          {/* Project 1 */}
          <Col md={6} sm={12} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Sangeetha-Kamaraj/capfinproject-front/blob/main/front%20photo.png?raw=true"
              title="Bulkmail System"
              description="Developed a comprehensive Bulk Email Tool designed to streamline email campaigns for users, providing functionality for template creation, recipient management, and email delivery tracking. The application supports secure user authentication, dynamic content customization, and real-time status notifications."
              link="https://capfinproject-front.vercel.app/login"
            />
          </Col>
          {/* Project 2 */}
          <Col md={6} sm={12} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Sangeetha-Kamaraj/Hotel-Frontend/blob/main/Screenshot%202024-09-17%20104933.png?raw=true"
              title="Food and Table Booking Online"
              description="Developed a dynamic hotel booking application using React and Material-UI, enabling users to search for hotels, manage bookings, and view booking details."
              link="https://hotelfrontendreact.netlify.app/"
            />
          </Col>
          {/* Project 3 */}
          <Col md={6} sm={12} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Sangeetha-Kamaraj/Razorpay-Frontend/blob/main/Screenshot%202024-10-13%20144044.png?raw=true"
              title="Razorpay"
              description="This project aims to implement a robust payment processing solution using Razorpay, allowing businesses to accept payments via multiple methods."
              link="https://symphonious-daifuku-31e3d0.netlify.app/"
            />
          </Col>
          {/* Project 4 */}
          <Col md={6} sm={12} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Sangeetha-Kamaraj/Snap-Frontend/blob/main/Screenshot%202024-10-14%20050326.png?raw=true"
              title="Snap"
              description="The Snap project is an innovative instant messaging application designed to facilitate seamless communication among users."
              link="https://snapfrontend.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
