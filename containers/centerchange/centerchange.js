import React from "react";
import { Row, Col, Select, Button, Icon } from "antd";
import ChangeCenter from "../../assets/img/place.png";
import "./centerchange.css";

const { Option } = Select;
export default params => {
  return (
    <div id="center-change">
      <div className="center-change-container">
        <div className="center-change-img-container">
          <img
            className="center-change-img"
            src={ChangeCenter}
            alt="center-change-img"
          />
        </div>
        <div className="center-items">
          <Row>
            <Col span={10} style={{ textAlign: "center" }}>
              <p>Current Center</p>
              <Select
                defaultValue="lucy"
                style={{ width: "80%" }}
                disabled
                size="large"
              >
                <Option value="lucy">Accra</Option>
              </Select>
            </Col>
            <Col span={4} style={{ textAlign: "center" }}>
              <div>
                <Icon className="arrow-style" type="arrow-right" />
              </div>
            </Col>
            <Col span={10} style={{ textAlign: "center" }}>
              <p>New Center</p>
              <Select defaultValue="lucy" style={{ width: "80%" }} size="large">
                <Option value="jack">Accra</Option>
                <Option value="lucy">Ho</Option>
                <Option value="Yiminghe">Kumasi</Option>
              </Select>
            </Col>
          </Row>
        </div>
        <div style={{ textAlign: "center" }}>
          <Button size="large">Save changes</Button>
        </div>
      </div>
    </div>
  );
};
