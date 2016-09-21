import React from 'react';

// import components
import Instructions from './components/instructions.component';
import Passage from './components/passage.component';
import Quiz from './components/quiz.component';
import Results from './components/results.component';


var App = React.createClass({
  getInitialState: function(){
    return {
      currentQuestion: 0,
      quizResult: 0,
      quizActive: false,
      resultsActive: false
    };
  },
  handleAnswerClick: function(value){
    if (this.state.currentQuestion < this.props.data.cards.length - 1){
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        quizResult: this.state.quizResult + value
      });
      this.scrollText();
    } else {
      this.setState({
        resultsActive: true,
        quizActive: false,
      })
    }
  },
  finishQuiz: function(){
    this.setState({
      currentQuestion: 0,
      resultsActive: false,
      quizResult: 0,
    });
    // Reset the text
    this.scrollText(0);
  },
  scrollText: function(value){
    // TODO: Find out if there is a React way to get and manipulate elements
    // see here https://facebook.github.io/react/docs/working-with-the-browser.html
    // or here: https://facebook.github.io/react/docs/more-about-refs.html
    //
    // Animate text scrolling
    var distance;
    if (value !== undefined) {
      distance = value;
    } else {
      distance = document.getElementsByClassName('passage__highlight')[0].offsetTop - 15;
    }
    document.getElementById('text').scrollTop = distance;
  },
  handleQuizActive: function(){
    this.setState({
      quizActive: !this.state.quizActive
    })
  },
  render() {
    var results = this.state.resultsActive ? <Results score={this.state.quizResult} quizLength={this.props.data.cards.length} finish={this.finishQuiz} /> : null;
    var instructions = this.state.quizActive || this.state.resultsActive ? null : <Instructions data={this.props.data.instructions} startQuiz={this.handleQuizActive} />;
    var quiz = this.state.quizActive ? <Quiz data={this.props.data.cards} isActive={this.state.quizActive} activeQuestion={this.state.currentQuestion} onAnswerSubmit={this.handleAnswerClick}/> : null;
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
        <header className="mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600 is-casting-shadow">
        </header>
        <div className="mdl-layout__drawer mdl-color--blue-grey-800 mdl-color-text--blue-grey-50" id="text">
            <Passage data={this.props.data.passage} isActive={this.state.quizActive} activeQuestion={this.state.currentQuestion} />
        </div>
        <main className="mdl-layout__content" id="quiz">
            {instructions}
            {quiz}
            {results}
        </main>
      </div>
    );
  }
});

export default App;
