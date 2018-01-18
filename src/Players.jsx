import React from 'react';
import './MyHandler.css';
import ListPlayer from './ListPlayer.jsx';
class Players extends React.Component {
  
    render(){
        //console props from myhandlerf.jsx for debug
        console.log(this.props);
        //akses from myhandlers.js props
        return (
            <div className="Players">
                {this.props.members.map( (player) =>{
                    return(
                        <ListPlayer key={player.id} name={player.name} id={player.id} alamat={player.alamat} score={player.score} />
                    )
                })}
                </div>
            );
   }


}
export default Players;