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

const externalLinks = {
  whatsapp: "https://wa.me/56992363770",
  email: "mailto:gonzalolavin99@gmail.com",
  instagram: "https://www.instagram.com/gonzalolavin99",
  github: "https://github.com/gonzalolavin99",
};

const Footer = () => {
  const handleMenuClick = (e, section) => {
    console.log("Clicked menu item:", e.key);

    const url = externalLinks[e.key];
    if (url) {
      window.open(url, "_blank");
    }else{
      console.log("No url found for key:", e.key);
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
                      <Menu.Item key={item.key} icon={item.icon}>
                        {item.label}
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                trigger={["click"]}
              >
                <a
                  onClick={(e) => e.preventDefault()}
                  className="footer-dropdown"
                >
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
          <p>
            &copy; {new Date().getFullYear()} Gonzalo Lavín. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
