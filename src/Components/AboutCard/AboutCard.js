import React from 'react';
import Card from 'react-bootstrap/Card';
import './AboutCard.css'; // Optional: for additional custom styles

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="text-justify">
            Hi Everyone, My name is <span className="text-primary">Sangeetha Kamaraj</span>.
            I am a MCA Post Graduate from <span className="text-primary">TamilNadu, India</span>.
            <br />
            <br />
            I have completed a Master degree in Computer Science Application from Hidustan College of Engineering and Technology (2013-2016).
            <br />
            <br />
            ⚡ Enthusiastic and detail-oriented Master of Computer Applications (MCA) graduate with a strong foundation in software development, data structures, and algorithms. Adept at leveraging programming languages and frameworks to create efficient and innovative solutions. Proven ability to work collaboratively in team settings and deliver high-quality results under tight deadlines. Passionate about pursuing a career in [specific area of interest, e.g., software engineering, data science, web development] and eager to contribute to a dynamic organization.
            <br />
            <br />
            ⚡ Apart from this, I have Completed an intensive course on MERN stack development from Guvi, gaining hands-on experience in building and deploying full-stack applications.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
