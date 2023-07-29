import React from "react";
import GithubLogo from "./img/Github.svg";

import "../src/sass/style.css";

const Header = () => {
  return (
    <>
      <div>
        <a className="github-icon" href="https://github.com/adityapandey1111/Book-Library" target="_blank" rel="noreferrer">
          <img
            className="github-icon"
            style={{
              position: "absolute",
              right: "5px",
              top: "5px",
              height: "3rem",
              width: "3rem",
              padding: "3px",
              cursor: "pointer",
            }}
            src={GithubLogo}
            alt="github-icon"
          />
        </a>
        <strong>
          <h2
            className="heading-name"
            style={{
              background: "none",
              marginBottom: 50,
              color: "#333",
              textAlign: "center",
              fontFamily: "Scheherazade New",
              textShadow: "2px 2px 3px #b0b0b0",
            }}
          >
            A Online Book Library
          </h2>
        </strong>
      </div>
    </>
  );
};

export default Header;