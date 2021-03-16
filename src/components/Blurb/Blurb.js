import React, {Component} from 'react'
import './Blurb.css'

export default class Blurb extends Component {
  render() {
    return (
      <div id="blurb">
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