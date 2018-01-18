import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      internal:'Data Internal State'
    }
    this.oldState=this.oldState.bind(this);
    this.newstate=this.newstate.bind(this);
  }
  oldState(event){
    this.setState({
      internal:'Internal data change'
    })
}
newstate(event){
  this.setState({
    internal:'NEW data change'
  })
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>HEADER</h2>
          <p>Ini {this.state.internal},  dan ini {this.props.external_prop}</p>
          <button onClick={this.oldState}>Old state</button> | &nbsp;
          <button onClick={this.newstate}>New state</button>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>
      </div>
    );
  }
}

export default App;
