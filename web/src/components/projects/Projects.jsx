import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "A web application that helps users manage their tasks and projects.",
    },
{
    id: 2,
    title: "Project 2",
    description:"Another Web"
}
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='projects-container'>
      <div className='title'>
        <h1>My Projects</h1>
        <h4>Check out some of the projects I've worked on over the years.</h4>
      </div>
      <Slider {...settings}>
        {projects.map(project => (
          <div key={project.id} className="project-slide">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button className="view-project">View Project</button>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Projects;