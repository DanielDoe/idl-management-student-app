import React from "react";
import CenterChange from "../containers/centerchange";
import ReactNoSSR from "react-no-ssr";

export default params => {
  return (
    <ReactNoSSR>
      <CenterChange />
    </ReactNoSSR>
  );
};
