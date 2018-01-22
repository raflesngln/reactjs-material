import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import Dashboard from 'material-ui/svg-icons/action/dashboard';
import FontIcon from 'material-ui/FontIcon';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

const style = {
  paper: {
    display: 'inline-block',
    float: 'left',
    margin: '16px 32px 16px 0',
  },
  rightIcon: {
    textAlign: 'center',
    lineHeight: '24px',
  },
};

const ListMenuSidebar = () => (
  <div>
      <Menu>
      <MenuItem activeClassName="active" containerElement={<Link to="/" />} primaryText="Dashboard" leftIcon={<Dashboard />}/>
      <MenuItem activeClassName="active" containerElement={<Link to="/about" />} primaryText="Master" leftIcon={<ContentCopy />}/>
      <MenuItem activeClassName="active" containerElement={<Link to="/profile" />} primaryText="Profile" leftIcon={<PersonAdd />}/>
      <MenuItem activeClassName="active" containerElement={<Link to="/users" />} primaryText="Users" leftIcon={<ContentLink />}/>
      <MenuItem activeClassName="active" containerElement={<Link to="/users/2" />} primaryText="Userdetail" leftIcon={<RemoveRedEye />}/>
      <MenuItem activeClassName="active" containerElement={<Link to="/Mysubmenu" />} primaryText="Submenu" leftIcon={<RemoveRedEye />}/>
    <Divider />
      <MenuItem containerElement={<Link to="/" />} primaryText="Logout" leftIcon={<Delete />}/>
      </Menu>
  </div>
);

export default ListMenuSidebar;