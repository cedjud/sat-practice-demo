import React from 'react';

var Results = React.createClass({
  render(){
    // var correctAnswerNodes = this.props.correctAnswers.map(function(correctAnswer,index){
    //   return (
    //     <li key={index} className="correct-answer">{correctAnswer}</li>
    //   );
    // });
    // var givenAnswerNodes = this.props.givenAnswers.map(function(givenAnswer,index){
    //   return (
    //     <li key={index} className="given-answer">{givenAnswer}</li>
    //   );
    // });
    var score = 0;
    var results = this.props.results.map(function(result, index){
      if (result.isCorrect){
        score++;
      }
      return (
        <tr key={index}>
          <td>{result.isCorrect ? '✓' : '✘'}</td>
          <td>{result.responseText}</td>
          <td>{result.solutionText}</td>
        </tr>
      );
    });
    return (
      <div className="results">
        <h2 className="mdl-typography--title">Results</h2>
        <h2 className="mdl-typography--headline">You scored {score}/{this.props.quizLength}</h2>
        <div className="mdl-grid">
        <table>
          <thead>
          <tr>
            <th></th>
            <th>Your answer</th>
            <th>Correct answer</th>
          </tr>
          </thead>
          <tbody>
          {results}
          </tbody>
        </table>
        </div>
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" onClick={this.props.finish}>finish</button>
      </div>
    );
  }
});

export default Results;
