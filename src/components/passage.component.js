import React from 'react';

var Passage = React.createClass({
  // var newString;
  getInitialState: function(){
    return {
      text: [
        {
          type : "text",
          string : "sometext"
        }
      ],
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
      console.log(strings);
      return strings;
  },

  render(){

    var text = this.state.text.map(function(string, index){

      switch (string.type) {

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
          } else {
            return (
              <span key={index} className="passage__copy">{string.string}</span>
            );
          }
          break;

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
