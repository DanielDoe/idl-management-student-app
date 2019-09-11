import React from "react";
import Layout from "../component/Layout";
import LoginPage from "./login";
import "antd/dist/antd.css";
import ReactNoSSR from "react-no-ssr";

export default () => (
  <ReactNoSSR>
    <Layout>
      <LoginPage />
    </Layout>
  </ReactNoSSR>
);
