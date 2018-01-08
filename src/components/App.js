import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Place from './Place';
import Date from '../containers/DateContainer';
import PassengerContainer from '../containers/PassengerContainer';
import VisiblePlace from '../containers/VisiblePlace';
import Search from '../containers/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header><br/>

        <MuiThemeProvider>
          <div>
            <VisiblePlace /><br/>
            <Date/>
            <PassengerContainer/>
            <Search />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
