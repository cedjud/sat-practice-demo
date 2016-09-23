import React from 'react';
import classNames from 'classnames';

var Results = React.createClass({
  render(){
    var score = 0;
    var results = this.props.results.map(function(result, index){
      // Increment score if response is correct
      if (result.isCorrect){
        score++;
      }
      var rowClasses = classNames({
        'correct': result.isCorrect,
        'wrong': !result.isCorrect,
      });
      return (
        <tr key={index} className={rowClasses}>
          <td><i className={rowClasses + " material-icons"}>{result.isCorrect ? 'done' : 'clear'}</i></td>
          <td className="mdl-data-table__cell--non-numeric">{result.responseText}</td>
          <td className="mdl-data-table__cell--non-numeric">{result.solutionText}</td>
        </tr>
      );
    });
    return (
      <div className="results">
        <h2 className="mdl-typography--title">Results</h2>
        <h2 className="mdl-typography--headline">You scored {score}/{this.props.quizLength}</h2>

        <table className="mdl-data-table mdl-js-data-table">
          <thead>
          <tr>
            <th></th>
            <th className="mdl-data-table__cell--non-numeric">Your answer</th>
            <th className="mdl-data-table__cell--non-numeric">Correct answer</th>
          </tr>
          </thead>
          <tbody>
          {results}
          </tbody>
        </table>

        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-js-ripple-effect" onClick={this.props.finish}>finish</button>
      </div>
    );
  }
});

export default Results;
