import React, { Component } from 'react'
import './Boxes.css'
import Encrypt from './Encrypt'

class Boxes extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      type: 'encrypt',
      result: ''
    }
  }

  onInputChange = event => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    console.log(this.state.input)
  }

  render() {
    return (
      <div className="boxes">
        <Encrypt
          onInputChange={this.onInputChange}
          onButtonSubmit={this.onButtonSubmit}
        />
      </div>
    )
  }
}
export default Boxes
