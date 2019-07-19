import React from "react";
import { Col, Row } from "antd";
import Router from "next/router";
import "antd/dist/antd.css";
import Exams from "../../assets/img/wall-calendar.png";
import Teaching from "../../assets/img/calendar3.png";
import Venues from "../../assets/img/place.png";
import Profile from "../../assets/img/user.png";
import Paper from "@material-ui/core/Paper";

export default () => (
  <div className="main-container">
    <div className="container-div">
    <Paper className="main-paper">
    <h2>Welcome to IDL student portal</h2>
      <Row>
        <Col span={12}>
          <div className="items" onClick={() => Router.push('/examsTimeTable')}>
            <div className="icon-wrapper">
              <img src={Exams} alt="flaticon" />
            </div>
            <div className="project-name">
              <p>Exams timetable</p>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="items" onClick={() => Router.push('/teachingTimeTable')}>
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
          <div className="items" onClick={() => Router.push('/centerChange')}>
            <div className="icon-wrapper">
              <img src={Venues} alt="flaticon" />
            </div>
            <div className="project-name">
              <p>Change center</p>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="items" onClick={() => Router.push('/profile')}>
            <div className="icon-wrapper">
              <img src={Profile} alt="flaticon" />
            </div>
            <div className="project-name">
              <p>Profile</p>
            </div>
          </div>
        </Col>
      </Row>
      </Paper>
    </div>
  </div>
);
