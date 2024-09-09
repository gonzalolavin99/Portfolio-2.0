import React from "react";
import "./dashboard.css";
import foto_cv from "../../assets/imgs/foto_cv.jpg";

const Dashboard = () => {
  return (
    <div className="container-dash">
      <div className="me-container">
        <div className="dash-img">
          <img className="cv-img" src={foto_cv} alt="Gonzalo Lavín" />
        </div>
        <div>
          <h2><strong>Gonzalo Lavín Cordova</strong></h2>
          <p>
            Passionate and results-oriented Full Stack Developer with a customer-centric approach. I excel at teamwork, quickly adapting to new challenges, and delivering innovative solutions.
          </p>

          <div className="tech-container">
            <p>React</p>
            <p>JavaScript</p>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>PostgreSQL</p>
          </div>
        </div>
      </div>
      <div className="cv-container">
        <h4 className="tech-container"><strong>About Me</strong></h4>
        <p className="about-me-text">
          I'm a Full Stack Developer with excellent communication skills and an unwavering commitment to excellence. My experience includes leading the development of complex web applications, such as a car raffle platform. I'm always eager to learn and apply new technologies to solve real-world problems.
        </p>
        <p className="about-me-text">
          I completed my Full Stack Developer training at Academia Desafío Latam from March 2023 to May 2024. This comprehensive program equipped me with the skills to build robust and scalable web applications, preparing me for complex challenges in agile and collaborative development environments.
        </p>
        <a href="https://drive.google.com/drive/folders/1DB2G-EFNQO1BoOjhtMjCRvuFIs7diK6A" target="_blank" rel="noopener noreferrer">
          <button className="cv-button">Download CV</button>
        </a>
      </div>
    </div>
  );
};

export default Dashboard;