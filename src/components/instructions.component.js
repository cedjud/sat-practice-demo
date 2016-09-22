import React from 'react';

const Instructions = React.createClass({
  render() {
    return (
      <div className="directions">
        <h3 className="directions__title mdl-typography--headline">Instructions</h3>
        <p className="directions__copy">
          {this.props.data}
        </p>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" onClick={this.props.startQuiz}>start</button>
      </div>
    );
  }
});

export default Instructions;
