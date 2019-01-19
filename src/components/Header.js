import React from "react";

import Footer from "./Footer";
import avatar from "../assets/images/avatar.jpg";

const Header = () => {
  return (
    <header id="header">
      <div className="inner">
        <a href="#" className="image avatar">
          <img src={avatar} alt="profile" />
        </a>
        <h1>
          <strong>I am Peace</strong>, React Programmer
          <br />
          Development & Life Blog
        </h1>
      </div>
      <Footer />
    </header>
  );
};

export default Header;
