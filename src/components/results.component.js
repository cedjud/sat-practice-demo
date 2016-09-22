import React from 'react';

var Results = React.createClass({


  render(){
    var correctAnswerNodes = this.props.correctAnswers.map(function(correctAnswer,index){
      return (
        <p key={index}>{correctAnswer}</p>
      );
    });
    var givenAnswerNodes = this.props.givenAnswers.map(function(givenAnswer,index){
      return (
        <p key={index}>{givenAnswer}</p>
      );
    });

    return (
      <div>
        <h2 className="mdl-typography--headline">Results</h2>
        <p>You scored {this.props.score}/{this.props.quizLength}</p>

        {correctAnswerNodes}
        {givenAnswerNodes}

        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" onClick={this.props.finish}>finish</button>
      </div>
    );
  }
});

export default Results;
