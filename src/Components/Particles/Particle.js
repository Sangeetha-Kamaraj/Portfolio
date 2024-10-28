import React from "react";
import Particles from "react-tsparticles";

function Particle({ 
  numberOfParticles = 160, 
  speed = 0.05, 
  particleSize = 3, 
  color = "#ffffff" 
}) {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: numberOfParticles,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          color: {
            value: color,
          },
          shape: {
            type: "circle", // Can change this to "edge" or other shapes
          },
          size: {
            value: particleSize,
            random: true, // Makes particles sizes random
            anim: {
              enable: true,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          move: {
            direction: "none",
            speed: speed,
            random: false,
            straight: false,
            out_mode: "out", // Particles will leave the canvas
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse", // Particles move away on hover
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensures it's behind other elements
      }}
    />
  );
}

export default Particle;
