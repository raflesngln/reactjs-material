import React from 'react';

class Home extends React.Component{
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
            <h1>Ini Halaman HOME</h1>
            <div>Selamat datang {this.state.name +' - '+this.state.address} !</div>
            <button onClick={this.clickMe}> CLICK ME </button>
        </div>
        );
    }
}


export default Home;