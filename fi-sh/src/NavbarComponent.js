import React, { useEffect, useState } from "react";
import "./NavbarComponent.css";
import Logo from "./images/logoxl.png";
import Profile from "./images/profile.png";
import { useNavigate } from "react-router-dom";

function NavbarComponent() {
  const [show, handleShow] = useState(false);
  const history = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  return (
    <div className={`navbarComponent ${show && "navBlack"}`}>
      <div className="navContents">
        <img
          onClick={() => history("/")}
          className="navLogo"
          src={Logo}
          alt="navbar logo"
        />
        <img
          onClick={() => history("/profile")}
          className="navProfile"
          src={Profile}
          alt="navbar profile"
        />
      </div>
    </div>
  );
}

export default NavbarComponent;
