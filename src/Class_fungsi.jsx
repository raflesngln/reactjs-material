import React from 'react';

class Class_fungsi extends React.Component{

    constructor() {
        super();
        console.log("task instantiated!");
        
    }
   
    showId() {
        console.log(23);
    }
   
    static loadAll() {
        console.log("Loading all tasks..");
    }


}

export default Class_fungsi;
