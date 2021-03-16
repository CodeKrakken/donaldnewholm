import React, { Component } from 'react'
import Title from '../Title/Title'
import Blurb from '../Blurb/Blurb'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Title />
        <Blurb />
      </div>
    )
  }
}

