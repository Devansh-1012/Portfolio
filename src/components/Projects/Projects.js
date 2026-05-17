import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import HomeService from "../../Assets/Projects/Home Service.png";
import Genomic from "../../Assets/Projects/Genomic.png";
import WebScraper from "../../Assets/Projects/Web Scraper.png";
import snakegame from "../../Assets/Projects/snake game.png";
import stock from "../../Assets/Projects/stock.png";
import IPL from "../../Assets/Projects/IPL.png";
import Netflix from "../../Assets/Projects/Netflix.png";
import Population from "../../Assets/Projects/Population.png";
import Todolist from "../../Assets/Projects/To do list.png";
import FitnessTracking from "../../Assets/Projects/Fitness Tracking.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked during my academic years.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HomeService}
              isBlog={false}
              title="Serve Ease"
              description="Python Flask based AI-powered home service booking platform. The TF-IDF, Naive Bayes & LinearSVC based ML pipeline classifies services, predicts complexity, estimates price and assigns workers."
              ghLink="https://github.com/Devansh-1012/Serve-Ease-AI-Based-Home-Service-Booking-Platform"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Genomic}
              isBlog={false}
              title="Gene AI: Predictive analysis on Genomic Data"
              description="A Flask web app that reads DNA SNP files, matches variants against ClinVar, GWAS & PharmGKB databases, uses Random Forest ML to predict disease risk (Low/Medium/High), generates personalized nutrition & exercise plans, and includes a LLaMA 3 AI chatbot — secured with 10-layer authentication."
              ghLink="https://github.com/Devansh-1012/Gene-AI-Predcictive-Analysis-on-Genomic-Data"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebScraper}
              isBlog={false}
              title="Web Scraper"
              description="Web scraper in Python language to get product name, price, rating, reviews and availability from Amazon search results with Requests and BeautifulSoup4. Reads raw HTML and extracts the data into a Pandas DataFrame, then writes it out as an analysis-ready, clean CSV file."
              ghLink="https://github.com/Devansh-1012/Amazon-Product-Scraper"
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakegame}
              isBlog={false}
              title="Self Learning snake game"
              description="Snake AI using Deep Q-Network (DQN) — A reinforcement learning agent trained to play Snake autonomously using PyTorch. Features a custom Pygame environment, experience replay, target network stabilization, and an 11-feature state vector. "
              ghLink="https://github.com/Devansh-1012/Self_Learning_Snake_Game"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Market Analysis"
              description="Analyzed RELIANCE, TCS & INFY stock market data (2023-2025) using Python. Collected real data via yfinance, built MA20/MA50 crossover Buy/Sell/Hold strategy, evaluated returns, stored data in SQLite database, and created interactive Tableau dashboard with charts, story and insights."
              ghLink="https://github.com/Devansh-1012/Stock_Market_Analysis_Submission"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IPL}
              isBlog={false}
              title="IPL Analysis Dashboard"
              description="A fully functional Python and Streamlit dashboard analyzing 16 seasons of IPL cricket data. Features interactive Plotly charts, dynamic filters, team and player comparisons, toss and venue analysis, radar charts, and KPI metric cards — powered by Pandas and a synthetic dataset based on real IPL statistics."
              ghLink="https://github.com/Devansh-1012/IPL-Analytics-Dashboard"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflix}
              isBlog={false}
              title="Netflix Office EDA"
              description="DataCamp Python Exploratory Data Analysis project exploring if Netflix movies are getting shorter over the years, and finding guest stars in the most viewed episode of The Office. Knows how to manipulate data using Pandas and visualize custom scatter plot graphs with color and sizing logic using Matplotlib."
              ghLink="https://github.com/Devansh-1012/Netflix-Office-EDA"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todolist}
              isBlog={false}
              title="Taskflow"
              description="A complete To-Do web application developed using Python Flask, with secure BCrypt authentication, priority based To-Do management with due dates, overdue detection and real-time To-Dos dashboard. Supports dark mode, light mode, responsive UI, CSRF protection, and end-to-end CRUD; also generated using Flask-SQLAlchemy and SQLite."
              ghLink="https://github.com/Devansh-1012/Taskflow-Flask"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FitnessTracking}
              isBlog={false}
              title="FitnessTracking"
              description="A complete MERN fitness tracking application that includes JWT authentication, bcrypt password hashing, workout management with categories and calories, tracking water consumption daily, logging the weights with progress charts, BMI calculation (metric & imperial), and a real-time dashboard with Recharts visualization."
              ghLink="https://github.com/Devansh-1012/Fitness-Tracker-MERN"
              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
