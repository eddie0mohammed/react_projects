import React, { Component } from 'react';
import './App.css';

import JokeList from './component/JokesList/JokeList';

class App extends Component {
  render(){
    return (
      <div className="App">
        <JokeList />
      </div>
    );

  }
}

export default App;
