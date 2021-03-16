import React, { Component } from 'react'
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <div className="content">
        <div id="text">
          Hello, I'm Donald. I have my fingers in many pies. 
          Click the above buttons to sample my wares.<br /><br />
          <p className="center">
            Here endeth the pie metaphor.
          </p>
        </div>
      </div>
    )
  }
}

