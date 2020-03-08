import React, { Component } from 'react';
import Hello from './Hello';
import Clock from './Clock';
import Timer from './Timer';

import './App.css';
// lezione 11
const happy = <h2>sono felice</h2>
const clocks = [
  {
    secs: 1, country:"Italy", timezone:0
  },
  {
    secs: 2, country:"Russia", timezone:2
  },
  {
    secs: 3, country:"Cuba", timezone:-6
  }
]
class App extends Component {

  getCloks() {
    return clocks.map( ({secs, country, timezone}) => {
      return <Clock key={country} secs={secs} country={country} timezone={timezone} />
    })
  }

  render() {
    return (
      <React.Fragment>
      <div className="App">
          <h1>ciaoo</h1>
      </div>
      {happy}
      <ul>
      {this.getCloks()}
      </ul>
      <br></br>
      <Timer></Timer>

      </React.Fragment>
    );
  }
}

export default App;
