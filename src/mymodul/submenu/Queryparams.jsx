import React from 'react';

class Queryparams extends React.Component{

    render(){
        const {location,pattern,match,isExact}=this.props

        return (
        <div>
            <h1>Sub menu dssdsdsds</h1>
            <p>{location.search !=="" ? <p>query string: {JSON.stringify(location.search,null,2)}</p> : "null"}</p>
            <p>ID USER </p>
        </div>
        );
    }
}
export default Queryparams;