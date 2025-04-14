import React, { Component } from 'react'
import Loading from './Loading.gif'


export class Spoinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Loading} alt="Loading" className="src" />
      </div>
    )
  }
}

export default Spoinner
