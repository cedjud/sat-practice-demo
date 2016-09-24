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
      // relevant text. Replace this when implementing Redux or ReactLink
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
  },
  finishQuiz: function(){
    // Reset state
    // Set state.view to instructions
    this.setState({
      // resultsActive: false,
      index: 0,
      results: [],
      view: 'instructions'
    });
  },

  handleCardAnswerClick: function(result){
    if (this.state.index < this.props.data.cards.length - 1){
      this.setState({
        index: this.state.index + 1,
        results: this.state.results.concat(result)
      });
    }
    else if (this.state.index === this.props.data.cards.length - 1){
      this.setState({
        index: this.state.index + 1,
        results: this.state.results.concat(result),
        view: 'results'
      });
    }
  },

  render() {
    var view;

    // Display Component based on string in state.view
    switch (this.state.view) {

      case 'instructions':
        view = <Instructions data={this.props.data.instructions} startQuiz={this.startQuiz} />
        break;

      case 'quiz':
        view = <Quiz data={this.props.data.cards} index={this.state.index} isActive={true} onCardAnswerClick={this.handleCardAnswerClick}/>
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
          <Passage data={this.props.data.passage} isActive={this.state.view === 'quiz'} index={this.state.index} />
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
