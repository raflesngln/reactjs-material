import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const Mybutton = ({children}) =>(
    <div>
        {children}
    </div>
);
const Formuser = ()=>(
    <div>
    <Card>
    <CardHeader>
            <h2>Data Komponen</h2>
    </CardHeader>
    <CardText>
        <h5>This component includeed in usersdetail</h5>
        <Mybutton>Hello world</Mybutton>
    </CardText>
    </Card>
    </div>
);
export default Formuser;