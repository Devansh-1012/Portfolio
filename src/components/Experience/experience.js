import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import "./experiencee.css";

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Data Analyst Intern",
      company: "Jinarth InfoTech",
      duration: "May 2026 - Present",
      location: "Anand, India",
      description: [
        "Built retail analytics dashboards using Python, SQL, and Power BI",
         "Cleaned and processed datasets for accurate reporting",
          "Designed dashboards for sales and customer insights",
           "Wrote SQL queries for extraction and analysis",
            "Generated reports to support business decisions",
      ],
      technologies: ["Python", "SQL", "Power BI", "Pandas", "NumPy", "Excel", "Jupyter Notebook"],
      type: "Full-time",
    }
  ];

  return (
    <>
      <Particle />
      <Container fluid className="experience-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={12}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", paddingTop: "20px" }}>
              <strong className="purple">Experience</strong>
              </h1>
              <p style={{ color: "white", fontSize: "1.1em", marginBottom: "50px" }}>
                Here's a summary of my professional journey and the roles I've held
              </p>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center" }}>
            <Col md={10}>
              <div className="experience-timeline">
                {experiences.map((exp, index) => (
                  <ExperienceCard
                    key={exp.id}
                    experience={exp}
                    isEven={index % 2 === 1}
                  />
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Experience;
