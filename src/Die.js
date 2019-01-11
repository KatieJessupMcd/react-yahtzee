import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    return (
      <button
        className={this.props.locked ? 'Die Die-locked' : 'Die'}
        // BUG arrow function to maintian this
        onClick={() => this.props.handleClick(this.props.idx)}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
