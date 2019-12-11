import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 6,
      randoms: []
    };

  }

  componentDidMount() {
      this.handleClick();
  }

  handleClick = () => {
    const min = 0;
    const max = 9;
    const randFloorNumbers = [];

    for (let i = 0; i < this.state.amount; i++) {
        const randFloorNumber = Math.floor(min + Math.random() * (max - min));
        randFloorNumbers.push(randFloorNumber);
    }
      this.setState({
        randoms: randFloorNumbers
      })
  }

  render() {
    const randoms = this.state.randoms.map((random, i) => {
        return (
        <div key={i} className="App-number-div col-3 col-lg border border-info lead">
            {random}
        </div>
        )
    })

    return (
      <div className="App">
        <h1 className="App-name h1">TRUMPDOMIZER</h1>
        <h2 className="App-subtitle h3 lead">Make Random Great Again</h2>
        <img className="App-logo rounded" src={logo} alt="Trumpdomizer Logo" onClick={this.handleClick} />
        <p className="App-click-text mt-4 h4 font-weight-bold">CLICK TRUMP!</p>
        <div className="container">
          <div className="App-numbers-container d-flex row mx-auto">
            {randoms}
          </div>
        </div>
        <p className="App-description mx-auto">lottery random numbers extracted from tweets containing the endpoint "trump".
           This study is inspire, among other things, in the project random.org from
           Dr Mads Haahr of the School of Computer Science and Statistics,
           where it produce random numbers based on atmosferic noise...
        </p>
        <p className="App-copyRight text-muted">&copy; 2019 trumpdomizer.com</p>
      </div>
    );
  }
}

export default App;
