import React from "react";
import Profile from "../containers/profile";
import ReactNoSSR from "react-no-ssr";

export default () => {
  return (
    <ReactNoSSR>
      <Profile />
    </ReactNoSSR>
  );
};
