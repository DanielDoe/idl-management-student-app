import React from "react";
import StudentLogin from "../containers/login";
import ReactNoSSR from "react-no-ssr";

export default () => (
  <ReactNoSSR>
    <StudentLogin />
  </ReactNoSSR>
);
