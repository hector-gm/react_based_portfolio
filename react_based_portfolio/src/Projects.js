import React from "react";
import Thumbnail from "./Thumbnail";
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
      link="https://employee-directory-v2.herokuapp.com/"
      image=""
      title="Employee Directory App"
      category="Deployed Bootcamp Coursework"
      />
      <Thumbnail
      link="https://github.com/hector-gm/passwordGenerator"
      image=""
      title="Password Generator"
      category="Bootcamp Coursework GitHub Repo"
      />
      <Thumbnail
      link="https://novelty.herokuapp.com/"
      image=""
      title="Group Project"
      category="Deployed Bootcamp Coursework"
      />
      <Thumbnail
      link="https://hector-workout-tracker.herokuapp.com/"
      image=""
      title="Mongo Atlas enabled Fitness Tracker"
      category="Deployed Bootcamp Coursework"
      />
    </div>
  )
}
 
export default Projects;