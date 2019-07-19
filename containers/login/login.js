import React, { Component } from "react";
import Router from "next/router";
import Logo from "../../assets/img/logof.png";
import { Form, Icon, Input, Button, Checkbox } from "antd";

class StudentLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        Router.push('/main')
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{ width: '75%'}}>
        <div className="logo-container">
          <img src={Logo} alt="logo" className="logo-img" />
        </div>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item className="login-form-button">
          <Button type="primary" htmlType="submit" className="login-button">
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export const StudentLogin = Form.create({ name: "student_login" })(
  StudentLoginForm
);
