import React from "react";
import "./dashboard.css";
import foto_cv from "../../../assets/imgs/foto_cv.jpg";

const Dashboard = () => {
  return (
    <div className="container-dash">
      <div className="me-container">
        <div className="dash-img">
          <img src={foto_cv} alt="foto Gonzalo Lavín" />
        </div>
        <div>
          <h2>Gonzalo Lavín</h2>
          <p>
            I'm a passionate web developer with a strong background in frontend
            technologies. I love creating beautiful and functional websites that
            provide a great user experience.
          </p>

          <div className="tech-container">
            <p>React</p>
            <p>Javascript</p>
            <p>Node.JS</p>
            <p>Express.JS</p>
          </div>
        </div>
      </div>
      <div className="cv-container">
        <p>
          I'm a self-taught web developer with a passion for creating beautiful
          and functional websites. I've been working in the industry for the
          past 5 years, and I've had the opportunity to work on a wide range of
          projects, from small personal websites to large-scale web
          applications.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
