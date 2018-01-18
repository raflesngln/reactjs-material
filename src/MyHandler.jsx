import React from 'react';
import './MyHandler.css';
import Players from './Players.jsx';
import AddPlayer from './AddPlayer.jsx';

class MyHandler extends React.Component {
    constructor(props){
        super(props)
                //load array variable,simpan di constructor agar bbisa dipanggil siapa saja
            const PLAYERS=[
                    {id:1,name:'rafles',alamat:'jakarta',score:4},
                    {id:2,name:'budi',alamat:'serang',score:9},
                    {id:3,name:'mawar',alamat:'surabaya',score:6},
                    {id:4,name:'Rani',alamat:'medan',score:5}
                ]
        //membuat constanta player ke dalam state untuk bisa di panggil
        this.state={
            datamembers:PLAYERS
        }
        this.addPlayertoStateAdd=this.addPlayertoStateAdd.bind(this);
    }

    talk() {
        let speech = '';
        for (let i = 0; i < 10; i++) {
          speech += ' Menu '+i;
        }
        return(
            <div>
            <ul className="listhandler">
            <li>{speech}</li>
            </ul>
            </div>
        );
        
      }
    addPlayertoStateAdd(name) { //binding parameter dari addplayer jsx
        let new_members=this.state.datamembers
        new_members.push({name: name, score:10, id:new_members.length+1})
        this.setState({
            datamembers:new_members
        })
    }
    render() {
        return (
            <div>
          <button onClick={this.talk.bind(this)}>
            Click me!
          </button>
          <div>{this.talk()}</div>
          <p>&nbsp;</p>
          <p>==========================================</p>
          <Players members={this.state.datamembers}/>
          <AddPlayer ondAdd={this.addPlayertoStateAdd}/>
          </div>
        );
      }


}
export default MyHandler;