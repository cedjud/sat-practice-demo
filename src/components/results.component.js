import React from 'react';

var Results = React.createClass({
  render(){
    return (
      <div>
        <h2 className="mdl-typography--headline">Results</h2>
        <p>You scored {this.props.score}/{this.props.quizLength}</p>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" onClick={this.props.finish}>finish</button>
      </div>
    );
  }
});

export default Results;
