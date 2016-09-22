import React from 'react';
import classNames from 'classnames';

var Card = React.createClass({
  handleAnswerClick: function(e){
    var result;

    var correctAnswer = this.props.solutionText;
    var selectedAnswer = e.target.innerHTML;

    var givenAnswer = e.target.classList[1].split('-')[1];
    if (givenAnswer === this.props.solution){
      console.log('correct!');
      result = 1;
    } else {
      console.log('wrong!');
      result = 0;
    }
    this.props.onAnswerSubmit(result, selectedAnswer, correctAnswer);
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
          <p className="question__answer answer-A" onClick={this.handleAnswerClick}>{this.props.answerA}</p>
          <p className="question__answer answer-B" onClick={this.handleAnswerClick}>{this.props.answerB}</p>
          <p className="question__answer answer-C" onClick={this.handleAnswerClick}>{this.props.answerC}</p>
          <p className="question__answer answer-D" onClick={this.handleAnswerClick}>{this.props.answerD}</p>
          <p className="question__solution">(solution: {this.props.solution})</p>
        </div>
    );
  }
});

export default Card;
