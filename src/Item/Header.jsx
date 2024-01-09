import React from "react";
import Logo from "/src/Logo.jpg";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="Logo" />
      </div>
      <nav className="nav">
        <ul className="menu">
          <li className="menu-item">소개말</li>
          <li className="menu-item">판매</li>
          <li className="menu-item">구매</li>
          <li className="menu-item">피해 제보</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;