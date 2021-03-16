import React, {Component} from 'react'
import './Header.css'
let applause = new Audio('/applause.mp3')

export default class Header extends Component {

  render() {
    return (
      <div id="header">
        <h1 onClick={this.applause}>
          Donald Newholm
        </h1>
        
      </div>
    )
  }

  applause = () => {
    applause.play()
  }
}