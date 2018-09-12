import React, { Component } from 'react';

class Counter extends Component {
  render() {
    return (
      <div>
        <span>{this.props.value}</span>
        <button
          onClick={() => this.props.onIncrement()}>
          +
        </button>
        <button
          onClick={() => this.props.onDecrement()}>
          -
        </button>
      </div>
    );
  }
}

export default Counter;
