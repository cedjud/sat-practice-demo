import React from 'react';
import classNames from 'classnames';

var Card = React.createClass({
  handleCardAnswerClick: function(e){
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
    // Pass result to Quiz component
    this.props.onCardAnswerClick(result);
  },
  render(){
    var cardClasses = classNames({
      'mdl-card': true,
      'mdl-shadow--2dp': true,
      'card': true,
      'is-active': this.props.activeCard
    });
    return (
        <div className={cardClasses} id="question-1">
          <div className="mdl-card__title">
            <h4 className="card__title mdl-card__title-text">{this.props.title}</h4>
          </div>
          <p className="card__answer answer-A" onClick={this.handleCardAnswerClick}>{this.props.answerA}</p>
          <p className="card__answer answer-B" onClick={this.handleCardAnswerClick}>{this.props.answerB}</p>
          <p className="card__answer answer-C" onClick={this.handleCardAnswerClick}>{this.props.answerC}</p>
          <p className="card__answer answer-D" onClick={this.handleCardAnswerClick}>{this.props.answerD}</p>
          <p className="card__solution">(solution: {this.props.solution})</p>
        </div>
    );
  }
});

export default Card;
