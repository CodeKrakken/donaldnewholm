import React, {Component} from 'react'
import './Title.css'
let applause = new Audio('/applause.mp3')

export default class Title extends Component {

  render() {
    return (
      <div id="title">
        <div onClick={this.applause}>
          Donald Newholm
        </div>
        
      </div>
    )
  }

  applause = () => {
    applause.play()
  }
}