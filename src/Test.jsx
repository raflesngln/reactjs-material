import React from 'react';
class Test extends React.Component {
    constructor(props){
        super(props);
        this.state ={
           items:[
            {
                id:10,
                nm_menu:'Home'
            },
             {
                id:20,
                nm_menu:'Profile'
            },
            {
                id:30,
                nm_menu:'About'
            }
        ]
        }
        this.klikMe = this.klikMe.bind(this);
    }

    klikMe(idval){
        alert(idval+' hello world');
        console.log(idval);
    }
    clickSaya(value='') {
        let id=value;
        alert('Hello,you click component test');
        console.log({id}+' clicked');
      }
    getMydata(){
        return this.state.items.map((item, idx) => {
            return (
                    <li key = {idx}>
                    <button onClick ={() => this.klikMe(item.id)}> {item.nm_menu} </button>
                    </li >
                )
          })
    }
    render(){
        return (
            <div className="comment">
                This is the test component box with Map parse
                <ul>
                <label onClick={this.clickSaya.bind(this)}>Klik saya</label>
                </ul>
                <div id="">{this.getMydata()}</div>
                <p>======================================</p>
            </div>
            );
   }


}
export default Test;