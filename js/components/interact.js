import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

export class Interact extends React.Component {
  constructor(props) {
    super(props);
  }
  //TODO: Add Error Checking for input field
  //TODO: 1. Must be integer value
  //TODO: 2. Must between 0 - 100
  makeGuess() {
    const guessInput = Number(this.guessInput.value);
    this.props.dispatch(actions.guessNumber(guessInput));
    this.guessInput.value = '';
  }

  render() {
    return (
      <div className="interact">
      <input className="input-guess" type="text" ref={ref => this.guessInput = ref} />
      <button className="guess-button" type="button" onClick={this.makeGuess.bind(this)}>
        Guess
      </button>
      </div>
    )
  }
}

export default connect()(Interact)
