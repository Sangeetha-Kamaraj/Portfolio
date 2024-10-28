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
              description="Developed a comprehensive Bulk Email Tool that streamlines email campaigns for users. This application provides functionalities for creating customizable email templates, managing recipient lists, and tracking email delivery statuses. The tool includes secure user authentication, allowing users to maintain their privacy and data integrity. With an intuitive user interface, users can easily navigate through the various features, enhancing the overall experience."
              link="https://capfinproject-front.vercel.app/login"
              skills={["React.js", "Node.js", "MongoDB"]} // Added skills
            />
          </Col>
          {/* Project 2 */}
          <Col md={6} sm={12} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Sangeetha-Kamaraj/Hotel-Frontend/blob/main/Screenshot%202024-09-17%20104933.png?raw=true"
              title="Food and Table Booking Online"
              description="Created a dynamic hotel booking application utilizing React and Material-UI. This platform enables users to effortlessly search for hotels based on various criteria, manage their bookings, and view detailed booking information. The application offers a user-friendly interface with responsive design, ensuring a seamless experience on both desktop and mobile devices. Additional features include real-time availability checks and easy payment processing."
              link="https://hotelfrontendreact.netlify.app/"
              skills={["React.js", "Material-UI","Node.js","MongoDB"]} // Added skills
            />
          </Col>
          {/* Project 3 */}
          <Col md={6} sm={12} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Sangeetha-Kamaraj/Razorpay-Frontend/blob/main/Screenshot%202024-10-13%20144044.png?raw=true"
              title="Razorpay Integration"
              description="Implemented a robust payment processing solution using Razorpay, which allows businesses to accept payments through multiple methods such as credit cards, debit cards, and net banking. This project features a secure payment gateway with real-time transaction tracking and user notifications. The user interface is designed to provide an intuitive payment experience, enhancing customer satisfaction while ensuring security and compliance with payment standards."
              link="https://symphonious-daifuku-31e3d0.netlify.app/"
              skills={["React.js", "Razorpay","Node.js"]} // Added skills
            />
          </Col>
          {/* Project 4 */}
          <Col md={6} sm={12} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Sangeetha-Kamaraj/Snap-Frontend/blob/main/Screenshot%202024-10-14%20050326.png?raw=true"
              title="Snap Messaging App"
              description="The Snap project is an innovative instant messaging application designed to facilitate seamless communication among users. It offers real-time messaging capabilities with features such as group chats, multimedia sharing, and push notifications. Built with React and Socket.io, this application ensures quick message delivery and user engagement, making it a versatile tool for personal and group interactions."
              link="https://snapfrontend.netlify.app/"
              skills={["React.js", "Node.js", "Socket.io"]} // Added skills
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
