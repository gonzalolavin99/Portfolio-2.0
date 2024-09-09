import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.css";
import proyecto1Image from "../../assets/imgs/proyecto_1.png";
import proyecto2Image from "../../assets/imgs/proyecto_2.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Marketplace",
      description: "A comprehensive marketplace platform where users can register, log in, sell and buy products. Built with React for the frontend, utilizing React Router DOM for navigation, React Bootstrap and Font Awesome for styling. The backend API is constructed with Express.js, featuring user authentication with BCrypt and JWT. PostgreSQL serves as the database, with Pg and Pg-format for querying.",
      technologies: ["React", "Express.js", "PostgreSQL", "Firebase", "Bootstrap"],
      image: proyecto1Image,
      link: "https://front-marketplace.onrender.com/",
    },
    {
      id: 2,
      title: "Car Raffle Web Application",
      description: "A full-stack web application for managing car raffles, developed for JRMICHELSON SPA. It features a user-friendly interface built with React, JavaScript, and TypeScript. The backend uses Node.js and Express.js, with PostgreSQL as the database. The app includes secure user authentication, integration with payment APIs, and a robust ticket generation system.",
      technologies: ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
      image: proyecto2Image,
      link: "https://jr-michelson.vercel.app/",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className="projects-container">
      <div className="title">
        <h1><strong>My Projects</strong></h1>
        <h4>Explore some of the key projects I've developed, showcasing my skills in full-stack web development.</h4>
      </div>
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="project-slide">
            {project.image && <img src={project.image} alt={project.title} />}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button className="view-project">View Project</button>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;