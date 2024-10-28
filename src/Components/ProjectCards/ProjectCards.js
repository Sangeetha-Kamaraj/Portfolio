import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import PropTypes from 'prop-types';
import "./projectcards.css";

function ProjectCards({ imgPath, title, description, link, skills }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        {/* Skills Section */}
        <div className="skills-container">
          {skills.map((skill, index) => (
            <span key={index} className="skill-button">{skill}</span>
          ))}
        </div>
        <Button variant="primary" href={link} target="_blank" style={{ marginTop: '5px' }}>
          <BiLinkExternal /> &nbsp; View Project
        </Button>
      </Card.Body>
    </Card>
  );
}

ProjectCards.propTypes = {
  imgPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCards;
