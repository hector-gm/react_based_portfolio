import React from "react";
// import Thumbnail from "../Thumbnail";
 
function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      
      <div className="novelty">
        <img src="../assets/novelty.herokuapp.com_index.png" style={{height: "250px"}} />
        <h2> Novelty - An app for Book Lovers </h2>
        <h4>Category: "Deployed Bootcamp Coursework"</h4>
        <p>This was a group project involving API calls, handlebars rendering of content and MongoDB data manipulation.</p>
        <a href="https://novelty.herokuapp.com">Link to deployed app</a>
      </div>
      
      <br />

      <div className="pwa-budget-tracker">
        <img src="../assets/a-pwa-budget-tracker.herokuapp.com_.png" style={{height: "250px"}} />
        <h2> PWA Budget Tracker </h2>
        <h4>Category: "Deployed Bootcamp Coursework"</h4>
        <p>This was a solo project meant to create a progressive web app to track expenses online and offline.</p>
        <a href="https://a-pwa-budget-tracker.herokuapp.com/">Link to deployed app</a>
      </div>

      <br />

      <div className="employee-directory">
        <img src="../assets/emp_directory-example.png" style={{height: "250px"}} />
        <h2> Employee Directory </h2>
        <h4>Category: "Deployed Bootcamp Coursework"</h4>
        <p>This was a solo project meant to create an app using React</p>
        <a href="https://employee-directory-v2.herokuapp.com/">Link to deployed app</a>
      </div>
      
      

      
     
     
    </div>
  )
}
 
export default Projects;