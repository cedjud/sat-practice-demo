import React from 'react';

var Passage = React.createClass({
  // var newString;
  getInitialState: function(){
    return {
      text: [],
    };
  },

  componentDidMount: function(){
    this.setState({
      text: this.parsePassageBody(this.props.data.body, this.props.data.highlights)
    });
  },

  parsePassageBody: function(text, highlights){
    var strings = [];
    var refText = text;
    var textIndex = 0;
    console.log(text.length);
    highlights.forEach(function(highlight){
      // create object for text string and add to state.text
      var textString = {
        type: "text",
        string: refText.slice(textIndex, highlight.index)
      }
      strings.push(textString);
      // create object for highlight string and add to state.text
      var highlightString = {
        type: "highlight",
        string: highlight.text
      }
      strings.push(highlightString);
      textIndex = parseInt(highlight.index) + highlight.text.length;
      });
      return strings;
  },

  componentDidUpdate: function(){
    if (this.props.isActive) {
    this.scrollText();
  } else {
    this.scrollText(0);
  }
    console.log('update');
  },

  toggleHighlight: function(index){
    // Clear existing highlight
    this.clearHighlight();
    // Find highligh at index and toggle active state
    var highlight = document.getElementsByClassName('passage__highlight');
    if (highlight[index] !== undefined) {
      highlight[index].classList.toggle('passage__highlight-active');
    } else {
      console.log('No passage highlight found');
    }
  },

  clearHighlight: function(){
    // Get existing highlight
    var clearHighlight = document.getElementsByClassName('passage__highlight-active') || [];
    // If there are any active hightlights
    if (clearHighlight.length > 0){
      clearHighlight[0].classList.toggle('passage__highlight-active');
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
      this.toggleHighlight(this.props.index);
      var highlights = document.getElementsByClassName('passage__highlight');
      if (this.props.index < highlights.length){
        distance = highlights[this.props.index].offsetTop - 128;
      }
    }
    document.getElementsByClassName('text')[0].scrollTop = distance;
  },

  render(){
    // Make nodes from text strings
    var text = this.state.text.map(function(string, index){
      switch (string.type) {

        // If text string check if it has a line break. If it does add a
        // block element to set height between spans.
        case 'text':
          if (string.string.indexOf('\n') !== -1){
            var tempStringArray = string.string.split('\n');
            return (
              <span className="passage__paragraph-split" key={index}>
                <span className="passage__copy">{tempStringArray[0]}</span>
                <div className="passage__spacer"></div>
                <span className="passage__copy">{tempStringArray[1]}</span>
              </span>
            );
          // Else return single span.
          } else {
            return (
              <span key={index} className="passage__copy">{string.string}</span>
            );
          }
          break;
        // If text string is a highlight.
        case 'highlight':
          return (
            <span key={index} className="passage__highlight">{string.string}</span>
          );
        default:
          return (
            <span key={index}>Something went wrong</span>
          )

      }
    });

    return (
      <div className="passage">
        <h3 className="passage__title mdl-typography--headline">{this.props.data.title}</h3>
        {text}
      </div>
    );
  }
});

export default Passage;
