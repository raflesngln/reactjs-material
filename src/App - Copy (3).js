import React, { Component } from 'react';
//import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
// import Home from './mymodul/Home';
// import About from './mymodul/About';
// import Profile from './mymodul/Profile';
import Sidebar from './mymodul/Sidebar';

/* themes material ui */
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
//import MyAwesomeReactComponent from './MyAwesomeReactComponent';


class App extends Component {
  
  render() {
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Sidebar title="My AppBar" />
        {/* <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </div> */}
        </MuiThemeProvider>
    );
  }
}

export default App;
