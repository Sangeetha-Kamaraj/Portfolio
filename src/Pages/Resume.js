import React from 'react';
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Components/Particles/Particle";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../Assets/resume.pdf"; 

function Resume() {
    const resumeContainerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        color: 'black',
    };

    const titleStyle = {
        marginTop: '1.5rem',
        marginBottom: '0.5rem',
        textAlign: 'center',
    };

    
    

    return (
        <Container fluid className="resume-section">
            <Particle />

            <Container style={resumeContainerStyle}>
                <h1 style={{ textAlign: 'center' }}>Sangeetha Kamaraj</h1>
                <p style={{ textAlign: 'center' }}>
                    Phone: 8778002883 / 8870920148 | 
                    Email: <a href="mailto:k-sangeetha@outlook.com">k-sangeetha@outlook.com</a> | 
                    LinkedIn: <a href="https://linkedin.com/in/sangeetha-kamaraj" target="_blank" rel="noopener noreferrer">linkedin.com/in/sangeetha-kamaraj</a> | 
                    GitHub: <a href="https://github.com/Sangeetha-Kamaraj" target="_blank" rel="noopener noreferrer">github.com/Sangeetha-Kamaraj</a>
                </p>
                
                <hr />

                <h3 style={titleStyle}>Professional Summary</h3>
                <p>Detail-oriented MCA graduate with extensive training in MERN stack development. Proficient in creating scalable and responsive web applications utilizing MongoDB, Express.js, React, and Node.js. Strong problem-solving abilities with a passion for developing efficient, user-friendly solutions.</p>

                <h3 style={titleStyle}>Key Skills</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Programming Languages: JavaScript, HTML, CSS</li>
                    <li>Web Development: MERN Stack (MongoDB, Express.js, React, Node.js), RESTful APIs</li>
                    <li>Database Management: MongoDB, SQL</li>
                    <li>Tools & Technologies: Git, Docker, Postman, Heroku</li>
                    <li>Soft Skills: Problem-solving, teamwork, communication, adaptability</li>
                </ul>

                <h3 style={titleStyle}>Academic Projects</h3>
                {[
                    {
                        title: "Bulk Email Tool",
                        role: "Full Stack Developer",
                        description: [
                            "Developed a comprehensive web application for managing email campaigns.",
                            "Implemented user authentication with JWT.",
                            "Integrated tracking functionalities for email delivery and engagement metrics.",
                            "Utilized React for a dynamic UI and Node.js for backend operations."
                        ]
                    },
                    {
                        title: "Hotel Booking Application",
                        role: "Full Stack Developer",
                        description: [
                            "Designed a hotel booking system for searching hotels.",
                            "Developed an intuitive UI using React and Material-UI.",
                            "Implemented secure user authentication.",
                            "Integrated RESTful APIs for real-time data retrieval."
                        ]
                    },
                    {
                        title: "Razorpay Integration",
                        role: "Full Stack Developer",
                        description: [
                            "Developed a secure payment processing solution.",
                            "Ensured compliance with PCI DSS standards.",
                            "Implemented dynamic form handling for payments."
                        ]
                    },
                    {
                        title: "Snap Messaging App",
                        role: "Full Stack Developer",
                        description: [
                            "Created an instant messaging platform supporting multimedia sharing.",
                            "Designed an engaging UI with React.",
                            "Implemented WebSocket for real-time messaging."
                        ]
                    }
                ].map((project, index) => (
                    <div key={index} style={{ marginBottom: '1.5rem' }}>
                        <h4>{project.title}</h4>
                        <p><strong>Role:</strong> {project.role}</p>
                        <ul style={{ listStyleType: 'circle', paddingLeft: '20px' }}>
                            {project.description.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <h3 style={titleStyle}>Certifications</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>MERN Stack Development: Intensive course from Guvi.</li>
                </ul>

                <h3 style={titleStyle}>Education</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li><strong>Master of Computer Applications (MCA)</strong> - Anna University, Chennai (2013-2016)</li>
                    <li><strong>B.Sc. Computer Science</strong> - Periyar University, Salem (2009-2012)</li>
                </ul>

                <h3 style={titleStyle}>Technical Skills</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Front-End: React.js, HTML5, CSS3, Bootstrap</li>
                    <li>Back-End: Node.js, Express.js</li>
                    <li>Database: MongoDB, SQL</li>
                    <li>Version Control: Git, GitHub</li>
                    <li>Deployment: Netlify, Vercel</li>
                </ul>

                <h3 style={titleStyle}>Additional Information</h3>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                    <li>Languages: English (Fluent), Tamil</li>
                    <li>Interests: Coding, Technology Trends, Open Source Contributions</li>
                </ul>
            </Container>

            <Container>
                <Row style={{ justifyContent: "center", position: "relative",marginTop: '20px'  }}>
                    <Button variant="primary" href={pdf} target="_blank" download style={{ width: 'auto', padding: '10px 20px' }}>
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default Resume;
