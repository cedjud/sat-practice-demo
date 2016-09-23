import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import components
import Instructions from './components/instructions.component';
import Passage from './components/passage.component';
import Quiz from './components/quiz.component';
import Results from './components/results.component';

var App = React.createClass({
  getInitialState: function(){
    return {
      currentQuestion: 0,
      index: 0,
      view: 'instructions',
      results: []
    };
  },
  startQuiz: function(){
    // Set state.view to quiz
    this.setState({
      view: 'quiz'
    })
  },
  finishQuiz: function(){
    // Reset state
    // Set state.view to instructions
    this.setState({
      resultsActive: false,
      quizResult: 0,
      results: [],
      view: 'instructions'
    });
    // Scroll Text Passage back to top
    this.scrollText(0);
  },
  handleAnswerClick: function(result){
    // if (this.state.currentQuestion < this.props.data.cards.length - 1){
    if (this.state.index < this.props.data.cards.length - 1){
      this.setState({
        // currentQuestion: this.state.currentQuestion + 1,
        index: this.state.index + 1,
        results: this.state.results.concat(result)
      });
      this.scrollText();
    } else {
      this.setState({
        view: 'results'
      })
    }
  },
  scrollText: function(value){
    // Scroll Text Passage to given value or get passage highlight offset and scroll to it
    //
    // TODO: Find out the React way to get and manipulate standard DOM elements
    // see here https://facebook.github.io/react/docs/working-with-the-browser.html
    // or here: https://facebook.github.io/react/docs/more-about-refs.html
    // Animate text scrolling
    var distance;
    if (value !== undefined) {
      distance = value;
    } else {
      distance = document.getElementsByClassName('passage__highlight')[0].offsetTop - 15;
    }
    document.getElementsByClassName('text')[0].scrollTop = distance;
  },
  render() {
    // Display Component based on string in state.view
    var view;
    switch (this.state.view) {
      case 'instructions':
        view = <Instructions data={this.props.data.instructions} startQuiz={this.startQuiz} />
        break;
      case 'quiz':
        view = <Quiz data={this.props.data.cards} isActive={true} onAnswerSubmit={this.handleAnswerClick}/>
        break;
      case 'results':
        view = <Results results={this.state.results} quizLength={this.props.data.cards.length} finish={this.finishQuiz} />
        break;
      default:
        view = <h3>Something went wrong</h3>
    };
    return (
      <div className="mdl-layout mdl-js-layout">
        <header className="mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600 is-casting-shadow">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">SE Cards - Quiz Demo</span>
          </div>
        </header>
        <main className="mdl-layout__content mdl-grid">
          <div className="text mdl-cell mdl-cell--6-col mdl-color--blue-grey-800 mdl-color-text--blue-grey-50">
            <Passage data={this.props.data.passage} isActive={this.state.view === 'quiz'} activeQuestion={this.state.index} />
          </div>
          <div className="quiz mdl-cell mdl-cell--6-col">
              {view}
          </div>
        </main>
      </div>
    );
  }
});

export default App;
