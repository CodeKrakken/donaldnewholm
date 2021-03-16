import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Title from '../Title/Title'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <Link to="/code">Code</Link>
        <Link style={{"text-decoration":"none"}} to="/"><Title /></Link>
        <Link to="/music">Music</Link>
      </div>
    )
  }
}