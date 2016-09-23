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
  displayNextCard: function(result){
    console.log('Quiz notified');
    this.props.onAnswerSubmit(result);
    this.setState({
      currentCard: this.state.currentCard + 1
    });

  },
  render(){
    var self = this;
    var activeCard = this.props.activeQuestion;
    var defaultTitle = "How might the passage be revised to improve the expression of ideas?"
    var cardNodes = this.props.data.map( function( cardNode, index ) {
      var isActive = activeCard === index;
      return (
        <Card
          onAnswerSubmit={self.displayNextCard}
          activeCard={isActive}
          key={cardNode.id}
          title={cardNode.title !== "" ? cardNode.title : defaultTitle}
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
        transitionName="card"
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}>
          {cardNodes[this.state.currentCard]}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Quiz;
