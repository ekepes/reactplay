import React from 'react';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var GuessBox = React.createClass({
  getInitialState: function() {
    return {
      answer: getRandomInt(1, 10),
      guess: 0,
      message: ""
    };
  },
  handleChange: function(event) {
    this.setState({ guess: event.target.value });
  },
  checkGuess: function() {
    if (this.state.guess != 0) {
      if (this.state.guess == this.state.answer) {
        this.setState({ message: "You guessed it!" });
      } else if (this.state.guess < this.state.answer) {
        this.setState({ message: "You guessed too low." });
      } else if (this.state.guess > this.state.answer) {
        this.setState({ message: "You guessed too high." });
      } else {
        this.setState({ message: "Please enter a guess!" });
      }
    }
  },
  render: function() {
    return (
      <div className="well clearfix">
        <h1>Guess My Number!</h1>
        <label>Guess (1-10):</label>
        <input id="guess-field" type="number" min="1" max="10" onChange={this.handleChange}></input>
        <button className="btn btn-default pull-right" onClick={this.checkGuess}>Guess</button>
        <div>
            <strong>{ this.state.message }</strong>
        </div>
      </div>
    );
  }
});

export default GuessBox;
