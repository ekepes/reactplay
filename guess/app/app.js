import React from 'react';

var GuessBox = React.createClass({
  getInitialState: function() {
    return {
      answer: 5,
      guess: 0
    };
  },
  handleChange: function(event) {
    this.setState({ guess: event.target.value });
  },
  checkGuess: function() {
    if (this.state.guess != 0) {
      if (this.state.guess == this.state.answer) {
        return (
          <div>
            <strong>You guessed it!</strong>
          </div>
        );        
      }

      if (this.state.guess < this.state.answer) {
        var result = "You guessed too low."
      } else {
        var result = "You guessed too high."
      }
      
      return (
        <div className="alert alert-warning">
          <strong className="bg-danger">{result}</strong>
        </div>
      );
    } else {
      return "";
    }
  },
  render: function() {
    return (
      <div className="well clearfix">
        <h1>Guess My Number!</h1>
        <label>Guess (1-10):</label>
        <input id="guess-field" type="number" min="1" max="10" onChange={this.handleChange}></input>
        { this.checkGuess() }
      </div>
    );
  }
});

export default GuessBox;
