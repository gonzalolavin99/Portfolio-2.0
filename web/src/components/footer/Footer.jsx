import React, { useState } from "react";
import { Menu, Space, Input, Button, Modal, Row, Col, Card } from "antd";
import {
  GithubOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  MailOutlined,
  FileOutlined,
  ToolOutlined,
  ExperimentOutlined,
  ProjectOutlined,
  AppstoreOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import "./footer.css";

const menuItems = {
  about: [
    { label: "Curriculum Vitae", key: "cv", icon: <FileOutlined /> },
    { label: "Skills", key: "skills", icon: <ToolOutlined /> },
    { label: "Experience", key: "experience", icon: <ExperimentOutlined /> },
  ],
  projects: [
    { label: "Project 1", key: "project1", icon: <ProjectOutlined /> },
    { label: "Project 2", key: "project2", icon: <ProjectOutlined /> },
    { label: "View all", key: "all-projects", icon: <AppstoreOutlined /> },
  ],
  contact: [
    { label: "WhatsApp", key: "whatsapp", icon: <WhatsAppOutlined /> },
    { label: "Email", key: "email", icon: <MailOutlined /> },
  ],
  social: [
    { label: "Instagram", key: "instagram", icon: <InstagramOutlined /> },
    { label: "GitHub", key: "github", icon: <GithubOutlined /> },
  ],
};

const externalLinks = {
  whatsapp: "https://wa.me/56992363770",
  email: "mailto:gonzalolavin99@gmail.com",
  instagram: "https://www.instagram.com/gonzalolavin99",
  github: "https://github.com/gonzalolavin99",
  project1: "https://front-marketplace.onrender.com/",
  project2: "https://jr-michelson.vercel.app/",
  linkedin: "http://linkedin.com/in/gonzalo-lavin-cordova/",
  cv: "https://drive.google.com/drive/folders/1DB2G-EFNQO1BoOjhtMjCRvuFIs7diK6A",
};

const technologies = [
  "React", "JavaScript", "Node.js", "Express.js", "PostgreSQL",
  "HTML5", "CSS", "Git", "Jira", "Docker", "Linux Administration"
];

const skills = [
  "Effective and collaborative teamwork",
  "Adaptability and continuous learning",
  "Clear and persuasive communication",
  "Problem-solving and critical thinking",
  "Commitment to quality and excellence",
  "Client-centric focus",
  "Responsibility and proactivity"
];

const experience = [
  {
    title: "Full Stack Developer at JRMICHELSON SPA",
    period: "January 2024 - July 2024",
    description: "Led the development of a comprehensive web application for car raffles using React, JavaScript, Node.js, Express.js, TypeScript, and PostgreSQL. Created an intuitive user interface, implemented a robust API integrated with a payment platform, and demonstrated the ability to work in a multidisciplinary team environment.",
  },
  {
    title: "Marketplace Project",
    period: "Personal Project",
    description: "Developed a full-stack marketplace platform where users can register, log in, sell and buy products. Utilized React for the frontend with React Router DOM and React Bootstrap. Built the backend API with Express.js, featuring user authentication with BCrypt and JWT. Used PostgreSQL as the database with Pg and Pg-format for querying.",
  },
];

const Footer = () => {
  const [isSkillsModalVisible, setIsSkillsModalVisible] = useState(false);
  const [isExperienceModalVisible, setIsExperienceModalVisible] = useState(false);

  const handleMenuClick = (e, section) => {
    console.log("Clicked menu item:", e.key);

    if (e.key === "skills") {
      setIsSkillsModalVisible(true);
    } else if (e.key === "experience") {
      setIsExperienceModalVisible(true);
    } else {
      const url = externalLinks[e.key];
      if (url) {
        window.open(url, "_blank");
      } else {
        console.log("No url found for key:", e.key);
      }
    }
  };

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>Gonzalo Lavín</h2>
            <p>Full Stack Web Developer</p>
          </div>
          <div className="footer-newsletter">
            <h3>Subscribe to my newsletter</h3>
            <Space.Compact style={{ width: "100%" }}>
              <Input placeholder="Your email" />
              <Button type="primary">Subscribe</Button>
            </Space.Compact>
          </div>
        </div>
        <div className="section-container">
          {Object.entries(menuItems).map(([section, items]) => (
            <div key={section} className="footer-section">
              <h3>{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
              <Menu
                onClick={(e) => handleMenuClick(e, section)}
                items={items.map((item) => ({
                  key: item.key,
                  icon: item.icon,
                  label: item.label,
                }))}
              />
            </div>
          ))}
          <div className="footer-section">
            <h3>Contact</h3>
            <p>
              <MailOutlined /> gonzalolavin99@gmail.com
            </p>
            <p>
              <WhatsAppOutlined /> +56 9 9236 3770
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-social">
            <a href={externalLinks.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramOutlined />
            </a>
            <a href={externalLinks.github} target="_blank" rel="noopener noreferrer">
              <GithubOutlined />
            </a>
            <a href={externalLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined />
            </a>
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Gonzalo Lavín. All rights reserved.</p>
          </div>
        </div>
      </div>
      <Modal
        title="Skills & Technologies"
        visible={isSkillsModalVisible}
        onOk={() => setIsSkillsModalVisible(false)}
        onCancel={() => setIsSkillsModalVisible(false)}
        width={800}
      >
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Card title="Technologies" bordered={false}>
              <ul>
                {technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card title="Skills" bordered={false}>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </Card>
          </Col>
        </Row>
      </Modal>
      <Modal
        title="Experience"
        visible={isExperienceModalVisible}
        onOk={() => setIsExperienceModalVisible(false)}
        onCancel={() => setIsExperienceModalVisible(false)}
        width={800}
      >
        {experience.map((exp, index) => (
          <Card key={index} title={exp.title} extra={exp.period} style={{ marginBottom: 16 }}>
            <p>{exp.description}</p>
          </Card>
        ))}
      </Modal>
    </footer>
  );
};

export default Footer;