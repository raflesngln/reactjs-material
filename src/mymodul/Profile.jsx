import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Profile extends React.Component{
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
            <h1>Halaman PROFILE</h1>
            <p>Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet,</p>
            <RaisedButton label="Default" />
        </div>
        );
    }
}


export default Profile;