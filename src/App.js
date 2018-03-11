import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Button from './classes/Button.js';
import index from './index/index'

class App extends Component {
  constructor() {
    super();
    axios.get('/api/news/page/').then((response) => {
      this.setState({ data: response.data})
    })
    this.screenId = 'data';
    this.index = index
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
          return this.index(val, this.screenId)
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
