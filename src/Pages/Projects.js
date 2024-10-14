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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Sangeetha-Kamaraj/capfinproject-front/blob/main/front%20photo.png?raw=true"
              title="Bulkmail System"
              description="Developed a comprehensive Bulk Email Tool designed to streamline email campaigns for users, providing functionality for template creation, recipient management, and email delivery tracking. The application supports secure user authentication, dynamic content customization, and real-time status notifications.Designed and developed a Bulk Email Tool using React.js for the frontend and Node.js with Express.js for the backend, integrating MongoDB for data management.
                          Implemented secure user authentication with JWT and Bcrypt, and role-based access control to manage user permissions.
                          Developed dynamic email template creation and management features, allowing users to personalize content and handle large recipient lists efficiently."
              link="https://capfinproject-front.vercel.app/login"
           />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Sangeetha-Kamaraj/Hotel-Frontend/blob/main/Screenshot%202024-09-17%20104933.png?raw=true"
              title="Food and Table Booking online"
              description="Developed a dynamic hotel booking application using React and Material-UI, enabling users to search for hotels, manage bookings, and view booking details.
                          Implemented a search feature with location-based filtering using Autocomplete and integrated real-time data fetching with Axios.
                          Created modals for user authentication and booking management, improving user interaction and session handling.
                          Utilized Grid2 for responsive layout and AppBar for a cohesive navigation experience.
                          Collaborated with backend developers to integrate API endpoints and ensure seamless data exchange.
                          Enhanced application performance and user experience through efficient state management and responsive design."

              link="https://hotelfrontendreact.netlify.app/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Sangeetha-Kamaraj/Razorpay-Frontend/blob/main/Screenshot%202024-10-13%20144044.png?raw=true"
              title="Razorpay"
              description="This project aims to implement a robust payment processing solution using Razorpay, a leading payment gateway in India. 
              The system is designed to facilitate seamless and secure online transactions for users, allowing businesses to accept payments via multiple methods, including credit/debit cards, UPI, and digital wallets.The goal of this project is to provide a reliable and efficient payment solution for businesses,
              enhancing the user experience while ensuring secure transactions. By integrating Razorpay, the system aims to simplify the payment process for users and businesses alike, driving higher conversion rates and customer satisfaction."
              link="https://symphonious-daifuku-31e3d0.netlify.app/"
              />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCards
              imgPath="https://github.com/Sangeetha-Kamaraj/Snap-Frontend/blob/main/Screenshot%202024-10-14%20050326.png?raw=true"
              title="Snap"
              description="The Snap project is an innovative instant messaging application designed to facilitate seamless communication among users. 
              Inspired by popular messaging platforms, Snap offers a rich set of features to enhance user interaction, privacy, and multimedia sharing, making it a go-to platform for casual and professional conversations.
              The Snap project aims to deliver a secure and engaging messaging experience that promotes meaningful connections among users. 
              By leveraging modern technologies and focusing on user-centric design, Snap aspires to become a reliable platform for personal and professional communication. "
              link="https://symphonious-daifuku-31e3d0.netlify.app/"
              />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;