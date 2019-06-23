import React from "react";
import { Col, Row } from "antd";
import Exams from "../../assets/img/wall-calendar.png";
import Teaching from "../../assets/img/calendar3.png";
import Venues from "../../assets/img/place.png";
import Profile from "../../assets/img/user.png";

export default () => (
  <div className="main-container">
    <div className="container-div">
      <Row>
        <Col span={12}>
          <div className="items" onClick={() => console.log('moving you to exams')}>
            <div className="icon-wrapper">
              <img src={Exams} alt="flaticon" />
            </div>
            <div className="project-name">
              <p>Exams timetable</p>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="items" onClick={() => console.log('moving you to teaching')}>
            <div className="icon-wrapper">
              <img src={Teaching} alt="flaticon" />
            </div>
            <div className="project-name">
              <p>Teaching timetable</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className="items" onClick={() => console.log('moving you to change center')}>
            <div className="icon-wrapper">
              <img src={Venues} alt="flaticon" />
            </div>
            <div className="project-name">
              <p>Change center</p>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="items" onClick={() => console.log('moving you to profile')}>
            <div className="icon-wrapper">
              <img src={Profile} alt="flaticon" />
            </div>
            <div className="project-name">
              <p>Profile</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);
