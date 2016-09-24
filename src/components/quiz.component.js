import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Import components
import Card from './card.component';

var Quiz = React.createClass({
  handleCardAnswerClick: function(result){
    //
    this.props.onCardAnswerClick(result);
  },
  render(){
    var defaultTitle = "How might the passage be revised to improve the expression of ideas?"
    var cardNodes = this.props.data.map( ( cardNode, index ) => {
      return (
        <Card
          onCardAnswerClick={this.handleCardAnswerClick}
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
        transitionEnterTimeout={500}
        transitionLeaveTimeout={50}>
          {cardNodes[this.props.index]}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});

export default Quiz;
