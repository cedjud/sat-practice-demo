import React from 'react';

var Results = React.createClass({


  render(){
    var correctAnswerNodes = this.props.correctAnswers.map(function(correctAnswer,index){
      return (
        <li key={index} className="correct-answer">{correctAnswer}</li>
      );
    });
    var givenAnswerNodes = this.props.givenAnswers.map(function(givenAnswer,index){
      return (
        <li key={index} className="given-answer">{givenAnswer}</li>
      );
    });

    return (
      <div className="results">
        <h2 className="mdl-typography--headline">Results</h2>
        <p>You scored {this.props.score}/{this.props.quizLength}</p>
        <div className="mdl-grid">
          <ul className="correct-answers mdl-cell mdl-cell--6-col">
            <p><em>Correct answers</em></p>
            {correctAnswerNodes}
          </ul>
          <ul className="given-answers mdl-cell mdl-cell--6-col">
            <p><em>Given answers</em></p>
            {givenAnswerNodes}
          </ul>
        </div>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" onClick={this.props.finish}>finish</button>
      </div>
    );
  }
});

export default Results;
