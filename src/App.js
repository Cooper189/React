import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Button from './classes/Button.js';
import Index from './index/index'

class App extends Component {
  constructor() {
    super();
    axios.get('/coimponents.json').then((response) => {
      this.setState({ data: response.data})
    })
    this.obj = Index
    this.state = {data : []}
  }
  render() {
    let userName = 'Random'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome {userName}</h1>
        </header>
        <div className="App-intro">
         {this.state.data.map((val, index) => {
          return this.obj.button
         })}
        </div>
      </div>
    );
  }
}
const styleBlock = {
  backgroundColor: 'green'
}
export default App;
