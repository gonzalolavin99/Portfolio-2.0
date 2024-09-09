import React from "react";
import { Form, Input, Button } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { WhatsAppOutlined, MailOutlined } from "@ant-design/icons";
import './contact.css'

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "https://portfolio-2-0-h1j4.onrender.com";

const openWhatsApp = () => {
  window.open("https://wa.me/56992363770", "_blank");
};

const openGmail = () => {
  window.open("mailto:gonzalolavin99@gmail.com", "_blank");
};

const Contact = () => {
  const onFinish = async (values) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/contact/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en la solicitud");
      }

      const data = await response.json();
      console.log("Server response:", data);
      toast.success("Form successfully sent");
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast.error(error.message || "Error al enviar el formulario");
    }
  };

  return (
    <div className="contact-container">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="contact-content">
        <div className="contact-title">
          <h1>
            <strong>Get in touch</strong>
          </h1>
          <p>
            I'm always excited to connect with new people and discuss potential
            projects. Feel free to reach out to me using the form below or through
            direct contact options.
          </p>
          <div className="direct-contact">
            <Button icon={<WhatsAppOutlined />} onClick={openWhatsApp}>
              Chat on WhatsApp
            </Button>
            <Button icon={<MailOutlined />} onClick={openGmail}>
              Send Email
            </Button>
          </div>
        </div>

        <div className="contact-form">
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Name" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter a valid email format",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item name="company">
              <Input placeholder="Company (optional)" />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input placeholder="Phone" />
            </Form.Item>
            <Form.Item
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea placeholder="Message" rows={4} />
            </Form.Item>
            <Form.Item>
              <Button className="form-btn" htmlType="submit">
                Send
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;