import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Devansh Rai</span>{" "}
            from <span className="purple">Gujarat, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Data Analyst Intern</span> at{" "}
            <span className="purple">Jinarth Infotech</span>.
            <br />I am an Undergraduate B-Tech student in{" "}
            <span className="purple">Information and Technology</span> from{" "}
            <span className="purple">CVM University</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Kabbadi and other outdoor games 
            </li>
            <li className="about-activity">
              <ImPointRight /> Content Creations ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Devansh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
