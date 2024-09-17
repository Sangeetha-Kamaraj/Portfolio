import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full-MERN-Stack Developer",
          "Experienced in creating responsive user interfaces and single-page applications with React.js and Redux",
          "Experienced in deploying MERN stack applications to cloud platforms such as Heroku and Vercel",
          "Adept at developing RESTful APIs and server-side logic using Node.js and Express.js",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
      }}
    />
  );
}

export default TypeWriter;