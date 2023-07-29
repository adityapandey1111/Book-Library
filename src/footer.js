import React from "react";
import logo from "./img/bookstore logo.png";

const Footer = () => {
  return (
    <div>
      <footer>
          <a href="https://aaditya0pf0.netlify.app">
            <img src={logo}
             style={{
              width: "auto",
              height: "2.5rem",
            }}/>
          </a>
      </footer>
    </div>
  );
};

export default Footer;