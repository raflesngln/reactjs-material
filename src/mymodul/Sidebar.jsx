import React, { Component } from 'react';

//const { Drawer, RaisedButton, MuiThemeProvider, getMuiTheme } = MaterialUI;
import { Drawer, RaisedButton, MuiThemeProvider, getMuiTheme } from 'material-ui';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './mystyle.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

//for menu app bar
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
//import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

const Logged = (props) => (
    <IconMenu
      {...props}
      iconButtonElement={
        <IconButton><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  );
  
  Logged.muiName = 'IconMenu';
//end for app bar

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    //first run sidebar drawer open
    this.state = { drawerOpen: true };
  }
  state = {
    logged: true,
  };
  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };
  //custome drawer
  handleToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});

  render() {
    const contentStyle = {  transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };
    if (this.state.drawerOpen) {
      contentStyle.marginLeft = 256;
    }

    return (
      <Router>
      <div>
      <AppBar
          title="My APPS"
          iconElementLeft={<IconButton onClick={this.handleToggle}><NavigationMenu /></IconButton>}
          iconElementRight={this.state.logged ? <Logged /> : <Logged />}
        />
        <Drawer open={this.state.drawerOpen} width={250} >
          <div style={{ textAlign: 'right' }}>
            <IconButton onClick={this.handleToggle}><NavigationClose /></IconButton>
          </div>
          {this.props.children}
        {/* for sidebar menu */}
        <ul className="my-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        </ul>
        {/* end of sidebar menu */}

        </Drawer>
        <div style={contentStyle} className="content-box">
        <Card>
          <CardText>
          <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          </div>
          </CardText>
        </Card>
        </div>
    </div>
    </Router>
    );
  }

}

export default Sidebar;