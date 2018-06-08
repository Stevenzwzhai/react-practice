import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import List from './pages/List/index.js'
class App extends Component {
    showProps = () => {
        console.log(this.props)
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <button onClick={this.showProps}>click</button>
          {this.props.change.name}
          <List/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(state => ({
    change: state.Change
}), {})(App);
