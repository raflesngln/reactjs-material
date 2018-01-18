import React from 'react';
import Test from './Test.jsx';
import MyHandler from './MyHandler.jsx';

class Hello extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "Raflesian",
            address:'jakarta barat'
        };
        this.changePerson=this.changePerson.bind(this);
    }
 changePerson(){
       this.setState({
            name:"Budi",
            address:"Serang banten"
       })
    }

    handleEvent() {
        alert('Hello, '+this.props.nama[0]+' You click with handler functions');
      }

    render(){
        
        //return React.createElement('h1',null,"Hello world from scratch javascript");
        let nama=this.props.nama;
        let alamat=this.props.alamat;
        return (
        <div className="hellow">
            <h1>Ini hello world dari file JS lain</h1>
            <p>Hai <b>{nama[1] +' and alamat '+ alamat}</b></p>
            <button onClick={this.handleEvent.bind(this)}>KLIK ME </button>
            <p><button onClick={this.changePerson}>change Name</button></p>
            <div>{this.state.name +' - '+this.state.address}</div>

            <Test/>

            <MyHandler />
        </div>
        );
    }
}


export default Hello;