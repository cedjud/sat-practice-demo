import React from 'react';

// Import Card component
import Card from './card.component';

var Quiz = React.createClass({
  displayNextCard: function(value){
    console.log('Quiz notified');
    this.props.onAnswerSubmit(value);
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
          title={cardNode.title}
          answerA={cardNode.A}
          answerB={cardNode.B}
          answerC={cardNode.C}
          answerD={cardNode.D}
          solution={cardNode.solution}
        />
      );
    });
    return (
      <div>
        {cardNodes}
      </div>
    );
  }
});

export default Quiz;
