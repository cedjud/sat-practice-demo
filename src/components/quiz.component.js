import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Import Card component
import Card from './card.component';

var Quiz = React.createClass({
  getInitialState: function(){
    return {
      currentCard: 0
    };
  },
  displayNextCard: function(result, givenAnswer, correctAnswer){
    console.log('Quiz notified');
    this.props.onAnswerSubmit(result, givenAnswer, correctAnswer);
    this.setState({
      currentCard: this.state.currentCard + 1
    });
  },
  render(){
    var self = this;
    var activeCard = this.props.activeQuestion;
    var cardNodes = this.props.data.map( function( cardNode, index ) {
      var isActive = activeCard === index;
      return (
        <Card
          onAnswerSubmit={self.displayNextCard}
          activeCard={isActive}
          key={cardNode.id}
          title={cardNode.title !== "" ? cardNode.title : 'default text'}
          answerA={cardNode.A}
          answerB={cardNode.B}
          answerC={cardNode.C}
          answerD={cardNode.D}
          solution={cardNode.solution}
          solutionText={cardNode[cardNode.solution]}
        />
      );
    });
    return (
      <div>
        <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
          {cardNodes[this.state.currentCard]}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Quiz;
