import React from "react";
import "./TypeWriter.css"; // Import your CSS for styles

const phrases = [
  "Passionate Full-MERN-Stack Developer",
  "Creating responsive user interfaces with React and Redux",
  "Deploying applications seamlessly on platforms like Heroku and Vercel",
  "Building robust APIs using Node.js and Express.js",
  "Always eager to learn and tackle new challenges!",
];

function TypeWriter() {
  return (
    <div className="typewriter-container">
      <div className="greeting-wrapper">
        <h1 className="greeting">Hi There! 👋🏻</h1>
        <h2 className="name">I'M Sangeetha Kamaraj</h2>
      </div>
      <div className="animated-text">
        {phrases.map((phrase, index) => (
          <div className="phrase" key={index}>
            {phrase}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TypeWriter;
