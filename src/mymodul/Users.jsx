import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Users extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "Rafles Nainggolan",
            address:'jakarta barat'
        };
        this.clickMe=this.clickMe.bind(this);
    }
    clickMe() {
        alert(`Hellooo, ${this.state.name} You click with handler functions`);
      }

    render(){
        return (
        <div>
            <h1>LIST OF ALL USERS</h1>
            <p>This is all of users</p>
            <RaisedButton label="Default" />
        </div>
        );
    }
}


export default Users;