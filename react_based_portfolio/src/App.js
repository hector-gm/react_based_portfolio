import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="portfolio">
      
        <header className="header">
          <NavBar />
        </header>
        
        <div className="page-content">
          <Main />
        </div>
      
        <Footer />
    </div>
  );
}

export default App;