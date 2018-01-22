import React, { Component } from 'react';
import ListMenuSidebar from './ListMenuSidebar';

import { Drawer, RaisedButton, MuiThemeProvider, getMuiTheme } from 'material-ui';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './mystyle.css';
//for routing
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
//this is page routing menu
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Users from './Users';
import Usersdetail from './Usersdetail';
import noMatch from './noMatch';
import Queryparams from './submenu/Queryparams';


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

//for submenu routing
import Submenu1 from './submenu/Submenu1';
import Submenu2 from './submenu/Submenu2';

const Mysubmenu= ({match}) =>(
  <div>
    <h1>with sub menu pages</h1>
    <ul>
    <li><Link to={`${match.url}/menu1`}>Sub Menu 1</Link></li>
    <li><Link to={`${match.url}/menu2/10`}>Sub Menu 2</Link></li>
    <li><Link to={{
                  pathname:match.url+'/queryparams',
                  search:'?id_user=2'
                  }} className="active">Query params</Link></li>
    </ul>
    <Route path={`${match.url}/menu1`} component={Submenu1} />
    <Route path={`${match.url}/menu2/:id`} component={Submenu2} />
    <Route path={`${match.url}/:queryparams`} component={Queryparams} />
  </div>
);


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
    const contentStyle = {transition: 'margin-left 450ms cubic-bezier(0.23, 1, 0.32, 1)' };
    if (this.state.drawerOpen) {
      contentStyle.marginLeft = 256;
    }
    const styles = {
        barstyle:{
            marginLeft:1,
        }
    }
    return (
      <Router>
      <div>
      <AppBar
          style={styles.barstyle}
          titleStyle={{marginLeft:220,marginRight:2}}
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
        <ListMenuSidebar />
        {/* end of sidebar menu */}

        </Drawer>
        <div style={contentStyle} className="content-box">
        <Card>
          <CardText>
          <div>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/Mysubmenu" component={Mysubmenu} />
          
          
          <Route exact path="/users" component={Users} />
          <Route path="/users/:id" component={Usersdetail} /> 
            {/* <Route render={function(){
              return <p>Not found</p>
            }} /> */}
        </Switch>
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