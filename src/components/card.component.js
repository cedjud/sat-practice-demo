import React from 'react';
import classNames from 'classnames';

var Card = React.createClass({
  handleResponseClick: function(e){
    var isCorrect;
    var result = {};
    // Get text of solution
    var solutionText = this.props.solutionText;
    // Get response text
    var responseText = e.target.innerHTML;
    // Get response value
    var responseValue = e.target.classList[1].split('-')[1];

    // Check if response is correct
    if (responseValue === this.props.solution){
      console.log('correct!');
      isCorrect = true;
    } else {
      console.log('wrong!');
      isCorrect = false
    }
    result = {
      isCorrect: isCorrect,
      solutionText: solutionText,
      responseText: responseText
    }
    this.props.onAnswerSubmit(result);
  },
  render(){
    var cardClasses = classNames({
      'mdl-card': true,
      'mdl-shadow--2dp': true,
      'question': true,
      'is-active': this.props.activeCard
    });
    return (
        <div className={cardClasses} id="question-1">
          <div className="mdl-card__title">
            <h4 className="question__title mdl-card__title-text">{this.props.title}</h4>
          </div>
          <p className="question__answer answer-A" onClick={this.handleResponseClick}>{this.props.answerA}</p>
          <p className="question__answer answer-B" onClick={this.handleResponseClick}>{this.props.answerB}</p>
          <p className="question__answer answer-C" onClick={this.handleResponseClick}>{this.props.answerC}</p>
          <p className="question__answer answer-D" onClick={this.handleResponseClick}>{this.props.answerD}</p>
          <p className="question__solution">(solution: {this.props.solution})</p>
        </div>
    );
  }
});

export default Card;
