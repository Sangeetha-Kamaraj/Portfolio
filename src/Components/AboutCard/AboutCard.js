import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaRocket, FaGraduationCap } from 'react-icons/fa';

function AboutCard() {
  return (
    <Card className="quote-card-view" style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>
      <Card.Body className="p-4">
        <blockquote className="blockquote mb-0">
          <p className="text-justify">
            Hi Everyone, my name is <span className="text-primary">Sangeetha Kamaraj</span>.
            I am an MCA graduate from <span className="text-primary">Tamil Nadu, India</span>.
          </p>
          <p>
            I completed my Master's in Computer Applications at Hindustan College of Engineering and Technology (2013-2016).
          </p>
          <p>
            <FaRocket aria-label="Rocket icon" /> Enthusiastic and detail-oriented, I have a strong foundation in software development, data structures, and algorithms. 
            I enjoy leveraging programming languages and frameworks to create innovative solutions. 
            I thrive in collaborative team settings and consistently deliver high-quality results under tight deadlines. 
            I am passionate about pursuing a career in software engineering and eager to contribute to a dynamic organization.
          </p>
          <p>
            <FaGraduationCap aria-label="Graduation cap icon" /> I also completed an intensive MERN stack development course from Guvi, where I gained hands-on experience in building and deploying full-stack applications.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
