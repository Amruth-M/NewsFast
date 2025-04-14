import React, { Component } from 'react';
import Loading from './Loading.gif';  // Ensure you have the gif in the correct path

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Loading} alt="Loading" className="loading-image" />
      </div>
    );
  }
}

export default Spinner;

