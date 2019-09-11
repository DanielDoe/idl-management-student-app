import React, { Component } from "react";
import axios from "axios";
import swal from 'sweetalert';
import { routeUserLogin } from "../../helpers/axiosCalls";
import Router from "next/router";
import Logo from "../../assets/img/logof.png";
import { Form, Icon, Input, Button, Checkbox } from "antd";

class StudentLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios
          .post(routeUserLogin, {
            email: values.email,
            ref_number: values.ref_number,
          })
          .then(function(response) {
            console.log(response);
            if (response.data.Statuscode == "200") {
              // console.log("Login unsuccessful..!")
              swal({
                title: "Good job!",
                text: "You are logged in successfully!",
                icon: "success",
                timer: 2000,
                button: false,
              });
              localStorage.setItem("login", JSON.stringify(response.data.info));
              Router.push("/main");
            } else {
              console.log("Login unsuccessful..!");
              swal({
                title: "Sorry!",
                text:
                  "We encountered an error logging you in please check your details or internet connection!",
                icon: "error",
                timer: 3000,
                button: false,
              });
            }
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="login-form"
        style={{ width: "75%" }}
      >
        <div className="logo-container">
          <img src={Logo} alt="logo" className="logo-img" />
        </div>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "Please input your username!" }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("ref_number", {
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
