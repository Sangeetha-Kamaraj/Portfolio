import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLinux, SiVisualstudiocode, SiPostman, SiAmazon, SiVercel, SiNetlify } from "react-icons/si";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const tools = [
  { icon: <SiLinux size={70} />, label: "Linux" },
  { icon: <SiVisualstudiocode size={70} />, label: "Visual Studio Code" },
  { icon: <SiPostman size={70} />, label: "Postman" },
  { icon: <SiAmazon size={70} />, label: "Amazon Web Services" },
  { icon: <SiVercel size={70} />, label: "Vercel" },
  { icon: <SiNetlify size={70} />, label: "Netlify" },
];

function ToolStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-${index}`}>{tool.label}</Tooltip>}
          >
            <span aria-label={tool.label} style={{ cursor: "pointer" }}>
              {tool.icon}
            </span>
          </OverlayTrigger>
        </Col>
      ))}
    </Row>
  );
}

export default ToolStack;
