import React from "react";
import { Card, Badge } from "react-bootstrap";
import "./experiencee.css";

function ExperienceCard({ experience, isEven }) {
  return (
    <div className={`experience-item ${isEven ? "even" : "odd"}`}>
      <div className="timeline-marker">
        <div className="timeline-dot"></div>
      </div>

      <Card className="experience-card">
        <Card.Body>
          <div className="experience-header">
            <div className="experience-title-section">
              <h3 className="experience-role">{experience.role}</h3>
              <h5 className="experience-company">
                <span className="purple">{experience.company}</span>
              </h5>
            </div>
            <Badge bg="purple" className="experience-type">
              {experience.type}
            </Badge>
          </div>

          <div className="experience-meta">
            <span className="experience-duration">
              📅 {experience.duration}
            </span>
            <span className="experience-location">
              📍 {experience.location}
            </span>
          </div>

          <div className="experience-description">
            <ul className="experience-description">
              {experience.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="experience-tech">
            <p className="tech-label">
              <strong>Technologies:</strong>
            </p>
            <div className="tech-badges">
              {experience.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ExperienceCard;
