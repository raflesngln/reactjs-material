import React from 'react';

class Submenu2 extends React.Component{
    constructor(props) {
        super(props);
            this.id=props.match.params.id
    }
    render(){
        const location=this.props.location
        return (
        <div>
            <h1>Sub menu 2 halamans ->  {this.id}</h1>
            <p>This content of submenu 2 {JSON.stringify(location)}</p>
            <p>ID USER </p>
        </div>
        );
    }
}
export default Submenu2;