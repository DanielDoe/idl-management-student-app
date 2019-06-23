import Head from "next/head";
import "../assets/global.css";

const Layout = props => (
  <div className="layout-container-view">
    <Head>
      <title>Student Portal</title>
    </Head>
    {props.children}
  </div>
);

export default Layout;
