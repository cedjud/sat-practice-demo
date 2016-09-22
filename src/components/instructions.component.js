import React from 'react';

const Instructions = React.createClass({
  render() {
    return (
      <div className="directions">
        <h2 className="directions__title mdl-typography--headline">DIRECTIONS</h2>
        <p className="directions__copy">
          {this.props.data}
        </p>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" onClick={this.props.startQuiz}>start</button>
      </div>
    );
  }
});

export default Instructions;
