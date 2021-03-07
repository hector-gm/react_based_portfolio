import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      
        <header className="header">
          <NavBar />
          {/* <div Navigation>
            <Link to="/About">About Me</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/FindMe">Find Me</Link>
          </div> */}
        </header>
        
        
          <div className="page-content"></div>
          <Main />
        
      
    </div>
  );
}

export default App;