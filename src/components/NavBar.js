import { lightblue } from "color-name";
import React from "react";
import { Link } from "react-router-dom";

function NavBar () {
  return (
    <div className="navigation">
          
          <div className="navigation-sub" style={{backgroundColor: lightblue}}>
            <Link to="/projects" className="item">Projects</Link>
            {/* <hr /> */}
            <Link to="/findme" className="item">Find Me</Link>
            {/* <hr /> */}
            <Link to="/about" className="item">About</Link>
          </div>
        </div>
  )
};

export default NavBar;