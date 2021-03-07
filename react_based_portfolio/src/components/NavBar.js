import React from "react";
import { Link } from "react-router-dom";

function NavBar () {
    <div className="navigation">
          {/* <img src={logo} className="logo" alt="Logo Image" /> */}
          <div className="navigation-sub">
            <Link to="/" className="item">Projects</Link>
            <Link to="/findme" className="item">Find Me</Link>
            <Link to="/about" className="item">About</Link>
          </div>
        </div>
}

export default NavBar;