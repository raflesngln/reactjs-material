import React from 'react';

class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "Rafles Nainggolan",
            address:'jakarta barat'
        };
        this.clickMe=this.clickMe.bind(this);
    }
    clickMe() {
        alert(`Hello, ${this.state.name} You click with handler functions`);
      }

    render(){
        return (
        <div>
            <h1> Halaman ABOUT</h1>
            <p>Our company is growith and number 1 in indonesian</p>
        </div>
        );
    }
}


export default About;