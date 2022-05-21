import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="container d-flex flex-column justify-content-between vh-100">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Layout;
