import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Place from './Place';
import Date from './Date';
import Passenger from './Passenger';
import VisiblePlace from '../containers/VisiblePlace';
import Search from '../containers/Search'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <VisiblePlace />
          {/* <Place place={this.props.place}/> */}
          <Date/>
          <Passenger/>
          <Search />
      </div>
    );
  }
}

export default App;
