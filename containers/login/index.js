import React from "react";
import { Row, Col } from "antd";
import "./login.css";
import { StudentLogin } from "../../containers/login/login";

export default () => (
  <div className="login-page-container">
    <Row className="grid-container">
      {/* <Col span={8} className="grid-container" /> */}
      <Col span={24} className="grid-container">
        <div className="login-view">
          <StudentLogin />
        </div>
      </Col>
      {/* <Col span={8} className="grid-container" /> */}
    </Row>
  </div>
);
