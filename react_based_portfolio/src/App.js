import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Projects from "./Projects";
import FindMe from "./FindMe";
import About from "./About"
import NavBar from "./components/NavBar";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route exact path="/findme" component={FindMe} />
        <Route exact path="/about" component={About} />

        <NavBar />
      </div>
    </BrowserRouter>  
  );
}

export default App;
