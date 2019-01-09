import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    inputValue: "",
    textLength: 0
  }

  calculatesTextLenghtHandler = event => {
    let currentValue = event.target.value
    console.log(" my current value: ", currentValue)
    this.setState({
      inputValue: currentValue,
      textLength: currentValue.length
    })
  }

  deletesCharFromText = (event, charIdx) => {
    
  }
  
  //for it input on char component, create a new block
  // implement delete
  render() {
    return (
      <div className="App">
        <p>Your current text: {this.state.inputValue}. The lenght of your text is: {this.state.textLength}</p>
        <input type="text" onChange={(event) => this.calculatesTextLenghtHandler(event)}/>
        <ValidationComponent textLength={this.state.textLength} />
        <CharComponent char={this.state.inputValue} click={this.deletesCharFromText}/>
      </div>
    );
  }
}

export default App;
