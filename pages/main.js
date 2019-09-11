import React from "react";
import MainPage from "../containers/main";
import Layout from "../component/Layout";
import ReactNoSSR from "react-no-ssr";

export default () => (
  <ReactNoSSR>
    <Layout>
      <MainPage />
    </Layout>
  </ReactNoSSR>
);
