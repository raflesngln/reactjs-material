import React from 'react';

export default class Hai extends React.Component {
    render(){
    return <h5>Ini adalah import konstanta dari file JSx</h5>;
   }
}

export class Siang extends React.Component {
    render(){
    return <h5>Hallo Selamat siang</h5>;
   }
}

export class Pagi extends React.Component {
    render(){
    return (
        <div>
            <h5>Hallo Selamat Pagi</h5>
            <p>Selamat bekerja</p>
        </div>
    );
   }
}
   

