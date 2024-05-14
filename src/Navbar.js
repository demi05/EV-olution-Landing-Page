import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header className="nav-div">
      <div className="nav">
        <h2>EV-olution</h2>
        <nav className="nav-elements" ref={navRef}>
          <Link to={"./"} onClick={showNavBar}>
            Home
          </Link>
          <Link to={"./explore"} onClick={showNavBar}>
            Explore
          </Link>
          <Link to={"./about"} onClick={showNavBar}>
            About
          </Link>
          <Link to={"./contact"} onClick={showNavBar}>
            Contact
          </Link>

          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </nav>
        <button className="nav-btn nav-open-btn" onClick={showNavBar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
