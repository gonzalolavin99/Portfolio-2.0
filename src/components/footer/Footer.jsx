import React from "react";
import "./footer.css";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";


const acercaItems = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Currículum Vitae
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item（disabled）",
    key: "3",
    disabled: true,
  },
];

const proyectosItems = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item（disabled）",
    key: "3",
    disabled: true,
  },
];

const contactoItems = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item（disabled）",
    key: "3",
    disabled: true,
  },
];

const redesItems = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Instagram
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        Github
      </a>
    ),
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item（disabled）",
    key: "3",
    disabled: true,
  },
];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="section-container">
        <Dropdown overlay={<Menu items={acercaItems} />}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Acerca de mi <DownOutlined />
            </Space>
          </a>
        </Dropdown>

        <Dropdown overlay={<Menu items={proyectosItems} />}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Proyectos <DownOutlined />
            </Space>
          </a>
        </Dropdown>

        <Dropdown overlay={<Menu items={contactoItems} />}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Contacto <DownOutlined />
            </Space>
          </a>
        </Dropdown>

        <Dropdown overlay={<Menu items={redesItems} />}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Redes Sociales <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Footer;
