import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Projects from "./components/Projects";
import FindMe from "./components/FindMe";
import About from "./components/About"
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
