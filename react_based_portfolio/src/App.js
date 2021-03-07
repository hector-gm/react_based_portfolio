import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Projects from "./Projects";
import FindMe from "./FindMe";
import About from "./About"
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route exact path="/findme" component={FindMe} />
        <Route exact path="/about" component={About} />

        <div className="navigation">
          {/* <img src={logo} className="logo" alt="Logo Image" /> */}
          <div className="navigation-sub">
            <link to="/" className="item">Projects</link>
            <link to="/findme" className="item">Find Me</link>
            <link to="/about" className="item">About</link>
          </div>
        </div>
      </div>
    </BrowserRouter>  
  );
}

export default App;
