import React from 'react';
class ListPlayer extends React.Component {
    constructor(props){
        super(props)
        this.state={
            score:this.props.score
        }
        //ini di daftarn di construct
        this.deCrementScore=this.deCrementScore.bind(this);

    }
    inCrementScore(event){
        this.setState({
            score:this.state.score + 2
        })
    }
    deCrementScore(event){
        this.setState({
            score:this.state.score - 2
        })
    }
    render(){
        //console props from myhandlerf.jsx for debug
        //console.log(this.props);
        //css inline jsx
        const styles = {
            container:{
                padding:6,
                display:'flex'
            },
            button:{
                padding:8,
                margin:6
            },
            name:{
                flex:0.6
            }
        }
        //akses from myhandlers.js props
        return (
            <div style={styles.container}>
                <div style={styles.name}>
                    {this.props.name}
                </div>
                <div>
                    <button  style={styles.button} onClick={this.deCrementScore}>-</button>
                    <span>{this.state.score}</span>
                    <button  style={styles.button} onClick={this.inCrementScore.bind(this)}>+</button>
                </div>
        </div>
        );
   }


}
export default ListPlayer;