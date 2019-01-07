import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name: "Ana", age: 25},
      {name: "Helena", age: 32}
    ]
  }

  switchNameHandler = () => {
    this.setState( {
      persons: [
        { name: "Karoline", age: 25 },
        { name: "Helena", age: 32 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: event.target.value, age: 25 },
        { name: "Maria Helena!!", age: 32 }
      ] 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} changed={this.nameChangedHandler} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler}/>
      </div>
    )
  }
}

export default App;
