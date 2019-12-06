import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';

class App extends Component {
  render() {
    const divs = [1, 2, 3, 4, 5, 6, 7];
    const div = divs.map(div =>
      <div key={divs.div} className="App-number-div col border border-info"></div>
    );
    return (
      <div className="App">
        <h1 className="App-name h1">TRUMPDOMIZER</h1>
        <h2 className="App-subtitle h3 lead">Make Random Great Again</h2>
        <img className="App-logo rounded" src={logo} alt="Trumpdomizer Logo"/>
        <p className="App-click-text mt-4 h4 font-weight-bold">CLICK TRUMP!</p>
        <div className="container mt-4 mx-auto">
          <div className="App-numbers-container d-flex row mx-auto">{div}</div>
        </div>
        <p className="App-description mx-auto mt-4">lottery random numbers extracted from tweets containing the endpoint "trump".
           This study is inspire, among other things, in the project random.org from
           Dr Mads Haahr of the School of Computer Science and Statistics,
           where it produce random numbers based on atmosferic noise...
        </p>
        <p className="text-muted">&copy; 2019 trumpdomizer.com</p>
      </div>
    );
  }
}

export default App;
