import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Progressing from './mytools/Progressing';
import {
    Route,
    Link
  } from 'react-router-dom';
class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: this.props.username,
            dev:this.props.dev,
            isLoading: true
        };
        this.handleOpen=this.handleOpen.bind(this);
    }
    handleOpen() {
        console.log(`Your state, ${this.state.username} show here !`);
      }
      componentDidMount() {
        // simulates an async action, and hides the spinner
        setTimeout(() => this.setState({ isLoading: false }), 600);
    }
    render(){
        return (
            //component for progress load data
            this.state.isLoading ? <Progressing /> :
            <div>
                <h1>Lorem Ipsum</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis pharetra dui. Maecenas molestie lectus sed fringilla mattis. Suspendisse potenti.</p>
                <p>Pellentesque eget convallis odio, a dapibus orci. Suspendisse justo arcu, posuere eu diam sed, fermentum porttitor nibh. Nullam sodales elit sit amet risus porta, id sodales nulla tincidunt. Fusce hendrerit varius metus, sed posuere nibh tincidunt nec. Donec pharetra, erat vitae lacinia porttitor</p>
                <RaisedButton label="Default" onClick={this.handleOpen} />
            </div>
        );
    }
}


export default Profile;