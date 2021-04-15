import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_img"
        src="https://scrimba.com/static/art/dark-logo.svg"
        alt="logo"
      />

      <div className="header_link">
        <div className="header_button">
          <button>Go Pro!</button>
        </div>
        <div className="header_login">
          <h4  className="login">All courses</h4>
          <h4 className="login">Sign in</h4>
          <h4 className="login">Sign up</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
