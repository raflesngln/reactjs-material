import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/* import Hello from './Hello';
//import Hai, { Pagi,Siang } from './Hai.jsx';
import Pagi from './Hai.jsx';
*/

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App external_prop='DATA EKSTERNAL/PROPS' />, document.getElementById('root'));
/*ReactDOM.render(<Pagi/>, document.getElementById('mybox'));

//with Props
ReactDOM.render(<Hello nama={["Rafles N", "budi", "mawar"]} alamat="Jakarat" jk="laki"/>, document.getElementById('content'));

*/


registerServiceWorker();
