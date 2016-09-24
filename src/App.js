import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// import components
import Instructions from './components/instructions.component';
import Passage from './components/passage.component';
import Quiz from './components/quiz.component';
import Results from './components/results.component';

var App = React.createClass({
  getInitialState: function(){
    return {
      // Global index. This is incremented when a question is answered
      // and is passed to the Passage component, where it is used to highlight the
      // relevant text. Replace this when implementing Redux.
      index: 0,
      view: 'instructions',
      results: []
    };
  },
  startQuiz: function(){
    // Set state.view to quiz
    this.setState({
      view: 'quiz'
    });
    this.toggleHighlight(this.state.index);
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
    // Is there a "React way" to select elements?
    // TODO: Animate text scrolling

    var distance;

    if (value !== undefined) {
      distance = value;
      this.clearHighlight();
    } else {
      this.toggleHighlight(this.state.index + 1);
      var highlight = document.getElementsByClassName('passage__highlight');
      distance = highlight[this.state.index].offsetTop - 15;
    }
    document.getElementsByClassName('text')[0].scrollTop = distance;
  },
  toggleHighlight: function(index){
    // Clear existing highlight
    this.clearHighlight();
    // Find highligh at index and toggle active state
    document.getElementsByClassName('passage__highlight')[index]
      .classList.toggle('passage__highlight-active');
  },

  clearHighlight: function(){
    // Get existing highlight
    var clearHighlight = document.getElementsByClassName('passage__highlight-active') || [];
    // If there are any active hightlights
    if (clearHighlight.length > 0){
      clearHighlight[0].classList.toggle('passage__highlight-active');
    }
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
      <div className="mdl-layout mdl-js-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <header className="mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600 is-casting-shadow">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">SE Cards - Quiz Demo</span>
          </div>
        </header>

        <div className="text mdl-layout__drawer mdl-color--blue-grey-800 mdl-color-text--blue-grey-50">
          <Passage data={this.props.data.passage} isActive={this.state.view === 'quiz'} activeQuestion={this.state.index} />
        </div>
        <main className="mdl-layout__content">

          <div className="quiz">
              {view}
          </div>
        </main>
      </div>
    );
  }
});

export default App;
