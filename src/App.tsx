import React, { Component } from 'react';
import './App.css';
import UserInput from './user-input/user-input';
import UserOutput from './user-output/user-output';

class App extends Component {
  state = {
    username: 'alejandrocamb'
  };

  usernameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      username: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          username={this.state.username}
          usernameHandler={this.usernameHandler}
        ></UserInput>
        <UserOutput username={this.state.username}></UserOutput>
      </div>
    );
  }
}

export default App;
