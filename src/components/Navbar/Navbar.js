import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/code">Code</Link>
        <Link to="/music">Music</Link>
      </div>
    )
  }
}