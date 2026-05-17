import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a B.Tech IT undergraduate passionate about Data Science and Analytics with proficient foundation in Python, SQL, Machine Learning and Data Visualisation. When solving problems, I take an organised and analytical approach, whether it be creating predictive models or reporting results on dashboards and reports. I am also a national-level Kabaddi player of Gujarat which has helped me to build discipline, team spirit, leadership and competitive attitude in all my activities.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  C, C++, Python{" "}
                </b>
              </i>
              and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
               I'm passionate about building
              <i>
                <b className="purple">
                  {" "}
                  Data-Driven Applications and AI-powered Solutions,{" "}
                </b>
              </i>
              with a keen interest in bridging raw data and real-world decision making.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple">  Python </b> and modern frameworks like{" "}
              <i>
                <b className="purple">Scikit-learn</b> and{" "}
                <b className="purple">Tensorflow</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
