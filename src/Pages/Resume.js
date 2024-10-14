import React from 'react';
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Components/Particles/Particle";
import resumeImage from "../Assets/resume1.png"; // Ensure the image path is correct
import projectImage from "../Assets/project-his.png"; // Ensure the image path is correct
import pdf from "../Assets/resume.pdf"; // Ensure the PDF path is correct
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
    return (
        <Container fluid className="resume-section">
            <Particle />
            
            <img src={resumeImage} alt="Resume" style={{ width: "70%", marginLeft: "15%", marginBottom: "5%" }} />
            <img src={projectImage} alt="Project" style={{ width: "70%", marginLeft: "15%", marginBottom: "5%" }} />
            
            <Container>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button variant="primary" href={pdf} target="_blank" download>
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </Container>
    );
}

export default Resume;
