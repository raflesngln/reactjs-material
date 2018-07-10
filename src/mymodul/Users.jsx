import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';
import Progressing from './mytools/Progressing';

class Users extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "Rafles Nainggolan",
            address:'jakarta barat',
            loading: true,
            datausers: [],
            product:[
                {
                   nama: 'Coca-cola',
                   id: 1
                },
                {
                    nama: 'Sprite',
                   id: 2
                },
                {
                    nama: 'POcari sweat',
                   id: 3
                }
             ]
        };
        
        this.addUser=this.addUser.bind(this);
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }
    componentDidMount() {
        //this.setState ({loading: false})
        setTimeout(() => this.setState({ loading: false }), 600); // simulates an async action, and hides the spinner
    }
    addUser() {
        var item = "Rafles.."
        var myArray = this.state.datausers.slice();
        myArray.push(item);
        this.setState({datausers: myArray})
     };
     findDomNodeHandler() {
        let myDiv = document.getElementById('myDiv');
        ReactDOM.findDOMNode(myDiv).style.color = 'red';
     }
     updateState(e) {
        this.setState({name: e.target.value,address:'jakbar'});
     }
     clearInput() {
        this.setState({name: '',address:''});
        ReactDOM.findDOMNode(this.refs.myInput).focus();
     }
    render(){
        return (
            //this is for progress loading component
            this.state.loading ? <Progressing /> :
        <div>
            <h1>LIST OF ALL USERS</h1>
            <p>This is all of users</p>
            <p><RaisedButton label="Add State" onClick={this.addUser} /></p>
            <h4>State Array: {this.state.datausers}</h4>
            <p><RaisedButton label="Find Dome Node" onClick = {this.findDomNodeHandler} /></p>

            <div id="myDiv">this is change by find dom,Lorem ipsum dolro sit amet</div>
            <div className="forminput">
            <h2>FORM INPPUT STATE</h2>
                <input type = "text" value = {this.state.name} 
                    onChange = {this.updateState} ref = "myInput"/>
                <input type = "text" value = {this.state.address} 
                    onChange = {this.updateState} ref = "myInput"/>
                    <h4>Hello {this.state.name}</h4>
                    <p><RaisedButton label="Clear input" onClick = {this.clearInput} /></p>

                    <div>
                        <h2>KEYS AND MAP</h2>
                        <div>
                        {this.state.product.map((dynamicData, i) => 
                        <Content key = {i} listdata = {dynamicData}/>)}
                        </div>
                        <hr/>
                    </div>
            </div>
        </div>
        );

    }
}
//second class
class Content extends React.Component {
    render() {
       return (
          <div>
            <table>
                <tr>
                    <td>ID </td>
                    <td>NAMA </td>
                </tr>
            <tr>
             <td><div>{this.props.listdata.id}</div></td>
             <td><div>{this.props.listdata.nama}</div></td>
             </tr>
             </table>
             
          </div>
       );
    }
}

export default Users;