import React from "react";
import { Dropdown, Menu, Space } from "antd";
import {
  DownOutlined,
  GithubOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  MailOutlined,
  FileOutlined,
  ToolOutlined,
  ExperimentOutlined,
  ProjectOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import "./footer.css";

const menuItems = {
  acerca: [
    { label: "Currículum Vitae", key: "cv", icon: <FileOutlined /> },
    { label: "Habilidades", key: "skills", icon: <ToolOutlined /> },
    { label: "Experiencia", key: "experience", icon: <ExperimentOutlined /> },
  ],
  proyectos: [
    { label: "Proyecto 1", key: "project1", icon: <ProjectOutlined /> },
    { label: "Proyecto 2", key: "project2", icon: <ProjectOutlined /> },
    { label: "Ver todos", key: "all-projects", icon: <AppstoreOutlined /> },
  ],
  contacto: [
    { label: "WhatsApp", key: "whatsapp", icon: <WhatsAppOutlined /> },
    { label: "Correo electrónico", key: "email", icon: <MailOutlined /> },
  ],
  redes: [
    { label: "Instagram", key: "instagram", icon: <InstagramOutlined /> },
    { label: "GitHub", key: "github", icon: <GithubOutlined /> },
  ],
};

const Footer = () => {
  const handleMenuClick = (e, section) => {
    console.log('Clicked menu item:', e.key);
    if (section === 'contacto') {
      if (e.key === 'whatsapp') {
        window.open('https://wa.me/56992363770', '_blank');
      } else if (e.key === 'email') {
        window.open('mailto:gonzalolavin99@gmail.com', '_blank');
      }
    }
  };

  return (
    <footer className="footer-container">
      <div className="container">
        <div className="section-container">
          {Object.entries(menuItems).map(([section, items]) => (
            <div key={section} className="footer-section">
              <Dropdown
                overlay={
                  <Menu onClick={(e) => handleMenuClick(e, section)}>
                    {items.map((item) => (
                      <Menu.Item key={item.key} icon={item.icon}>{item.label}</Menu.Item>
                    ))}
                  </Menu>
                }
                trigger={['click']}
              >
                <a onClick={(e) => e.preventDefault()} className="footer-dropdown">
                  <Space className="dropdown-title">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </div>
          ))}
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;