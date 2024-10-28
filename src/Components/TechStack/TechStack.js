import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiGit } from "react-icons/di";
import { SiFirebase } from "react-icons/si";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const techStack = [
  { icon: <CgCPlusPlus size={70} />, label: "C++" },
  { icon: <DiJavascript1 size={70} />, label: "JavaScript" },
  { icon: <DiNodejs size={70} />, label: "Node.js" },
  { icon: <DiReact size={70} />, label: "React" },
  { icon: <DiMongodb size={70} />, label: "MongoDB" },
  { icon: <DiGit size={70} />, label: "Git" },
  { icon: <SiFirebase size={70} />, label: "Firebase" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tech.label}</Tooltip>}
          >
            <span aria-label={tech.label} style={{ cursor: "pointer" }}>
              {tech.icon}
            </span>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
