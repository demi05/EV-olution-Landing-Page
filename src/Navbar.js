import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-div">
      <div className="nav">
        <h2>EV-olution</h2>
        <div className="nav-elements">
          <Link to={"./"}>Home</Link>
          <Link to={"./explore"}>Explore</Link>
          <Link to={"./about"}>About</Link>
          <Link to={"./conatct"}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
