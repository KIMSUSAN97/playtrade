import Logo from "/src/Logo.jpg";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={Logo} alt="Logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul className="menu">
          <li className="menu-item">
            <Link to="/intro">소개말</Link>
          </li>
          <li className="menu-item">
            <Link to="/Sell">판매</Link>
          </li>
          <li className="menu-item">
            <Link to="/Buy">구매</Link>
          </li>
          <li className="menu-item">피해 제보</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
