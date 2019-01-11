import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: "a", name: "Ana", age: 25},
      {id: "b", name: "Helena", age: 32}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // same behavior of the code above
    // const person = Object.assign({}, this.state.persons[personIndex])

    this.setState( {persons: persons} )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit 
        appTitle={this.props.title}
        persons={this.state.persons} 
        clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    )
  }
}

export default App;
