import React, { Component } from 'react';
import Hello from './Hello';
import Clock from './Clock';
import Timer from './Timer';

import './App.css';
// lezione 11
const happy = <h2>sono felice</h2>
function getDate(date) {
  return <h2> Today is {date.toLocaleDateString() + ' ' + date.toLocaleTimeString()}</h2>
}
class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div className="App">
          <h1>ciaoo</h1>
      </div>
      {happy}
      <Clock secs="1" timezone="0" country="Italia"/>
      <Clock secs="2" timezone="2" country="Russia"/>
      <Clock secs="3" timezone="-6" country="Cuba"></Clock>
      <br></br>
      <Timer></Timer>

      </React.Fragment>
    );
  }
}

export default App;
