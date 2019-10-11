import React from 'react'
import "./main.css"

function Project(props) {
  return (
    <div>
      <img className="mainTarget" src={props.image} width="300" height="200" />
      <h3 className="mainTarget" >{props.title}</h3>
      <a href={props.link}>Link to project</a>
    </div>
  )
}

export default Project
