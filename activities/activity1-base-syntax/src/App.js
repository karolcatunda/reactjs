import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {
state = {
  name: "Maria Helena"
}

usernameChangedHandler = (event) => {
  this.setState(
      {name: event.target.value}
  )
}

  render() {
    return (
      <div className="App">
        <UserOutput username={this.state.name} />
        <UserInput changed={this.usernameChangedHandler}/>
      </div>
    );
  }
}

export default App;
