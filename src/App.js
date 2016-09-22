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
      resultsActive: false,
      givenAnswers: [],
      correctAnswers: []
    };
  },
  handleAnswerClick: function(value, givenAnswer, correctAnswer){
    if (this.state.currentQuestion < this.props.data.cards.length - 1){
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
        quizResult: this.state.quizResult + value,
        givenAnswers: this.state.givenAnswers.concat(givenAnswer),
        correctAnswers: this.state.correctAnswers.concat(correctAnswer),

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
      givenAnswers: [],
      correctAnswers: []

    });
    // Reset the text
    this.scrollText(0);
  },
  scrollText: function(value){
    // TODO: Find out the React way to get and manipulate standard DOM elements
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
    document.getElementsByClassName('text')[0].scrollTop = distance;
  },
  handleQuizActive: function(){
    this.setState({
      quizActive: !this.state.quizActive
    })
  },
  render() {
    var results = this.state.resultsActive ? <Results correctAnswers={this.state.correctAnswers} givenAnswers={this.state.givenAnswers} score={this.state.quizResult} quizLength={this.props.data.cards.length} finish={this.finishQuiz} /> : null;
    var instructions = this.state.quizActive || this.state.resultsActive ? null : <Instructions data={this.props.data.instructions} startQuiz={this.handleQuizActive} />;
    var quiz = this.state.quizActive ? <Quiz data={this.props.data.cards} isActive={this.state.quizActive} activeQuestion={this.state.currentQuestion} onAnswerSubmit={this.handleAnswerClick}/> : null;
    return (
      <div className="mdl-layout mdl-js-layout ">
        <header className="mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600 is-casting-shadow">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">SE Cards - Quiz Demo</span>
          </div>
        </header>
        <main className="mdl-layout__content mdl-grid">
          <div className="text mdl-cell mdl-cell--6-col mdl-color--blue-grey-800 mdl-color-text--blue-grey-50">
            <Passage data={this.props.data.passage} isActive={this.state.quizActive} activeQuestion={this.state.currentQuestion} />
          </div>
          <div className="mdl-cell mdl-cell--6-col quiz" >
            {instructions}
            {quiz}
            {results}
          </div>
        </main>
      </div>
    );
  }
});

export default App;
