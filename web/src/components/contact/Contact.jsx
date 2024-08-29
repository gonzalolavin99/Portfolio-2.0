import React from "react";
import "./contact.css";
import { Button, Form, Input } from "antd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { WhatsAppOutlined, MailOutlined } from '@ant-design/icons';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

const Contact = () => {
  const onFinish = (values) => {
    console.log(values);
    if (values.user.name && values.user.email && values.user.introduction) {
      toast.success("Form submitted successfully!");
    } else {
      toast.error("Please fill in all required fields!");
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/56992363770', '_blank');
  };

  const openGmail = () => {
    window.open('mailto:gonzalolavin99@gmail.com', '_blank');
  };

  return (
    <div className="contact-container">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="contact-title">
        <h1><strong>Get in touch</strong></h1>
        <p>I'm always excited to connect with new people and discuss potential projects. Feel free to reach out to me using the form below or through direct contact options.</p>
        <div className="direct-contact">
          <Button icon={<WhatsAppOutlined />} onClick={openWhatsApp}>Chat on WhatsApp</Button>
          <Button icon={<MailOutlined />} onClick={openGmail}>Send Email</Button>
        </div>
      </div>
      <div className="contact-form">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: 500 }}
          validateMessages={validateMessages}
        >
          <Form.Item name={["user", "name"]} label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name={["user", "company"]} label="Company Name">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "email"]} label="Email" rules={[{ required: true, type: "email" }]}>
            <Input />
          </Form.Item>
          <Form.Item name={["user", "introduction"]} label="Message" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button className="form-btn" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Contact;