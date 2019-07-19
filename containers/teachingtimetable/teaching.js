import React from "react";
import { Row, Col, Button } from "antd";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "./teaching.css";
import CalendarImg from '../../assets/img/calendar3.png';
import "react-big-calendar/lib/css/react-big-calendar.css";

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue",
    },
  });

const localizer = momentLocalizer(moment);

export default () => {
  return (
    <div id="teaching">
      <div className="teaching-container">
        <div style={{ marginBottom: '1rem'}}>
            <Row gutter={6}>
                <Col span={2}><img className="teaching-img" src={CalendarImg} alt="calendar"/></Col>
                <Col span={8}><h2 className="header-text">Teaching Timetable</h2></Col>
                <Col span={8}><h2 className="header-text">Programme</h2></Col>
                <Col span={6}><Button className="header-text" style={{ float: 'right'}}>Download</Button></Col>
            </Row>
        </div>
        <div className="calender-view">
          <Calendar
            localizer={localizer}
            events={[]}
            startAccessor="start"
            endAccessor="end"
            // components={{
            //   timeSlotWrapper: ColoredDateCellWrapper,
            // }}
          />
        </div>
      </div>
    </div>
  );
};
