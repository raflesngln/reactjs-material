import React from 'react';

class AddPlayer extends React.Component {
    constructor(props){
        super(props)
        //membuat constanta player ke dalam state ntuk bisa di panggil
        this.state={
            name:""
        }
        //ini di daftarn di construct
        this.onPlayerChange=this.onPlayerChange.bind(this);
        this.addNewPlayer=this.addNewPlayer.bind(this);
    }
    onPlayerChange(event){
        this.setState({
            name:event.target.value, //mengambil nilai value dari event taerget
        })
    }
    addNewPlayer(event){
        this.props.ondAdd(this.state.name) //dibuatkan sebuah props dari state dari state di myhandler.jsx
        this.setState({
            name:"", //mengambil nilai value dari event taerget
        }) 
    }

    render(){
        const styles = {
            AddPlayer:{
                padding:6
            },
            button:{
                padding:8,
                margin:6
            }
        }
        return (
            <div style={styles.AddPlayer}>
               <input type="text" placeholder="write new player" onChange={this.onPlayerChange} value={this.state.name}/>
               <button onClick={this.addNewPlayer}>add player</button>
            </div>
            );
   }


}
export default AddPlayer;