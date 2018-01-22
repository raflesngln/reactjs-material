import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Progressing from './mytools/Progressing';
import Formuser from './users/Create_users';

import './mystyle.css';
import {
    Route,
    Link
  } from 'react-router-dom';
  const styles = {
    radioButton: {
      marginTop: 16,
    },
  };
class Usersdetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "Rafles Nainggolan",
            address:'jakarta barat',
            open: false,
        };
    }
     handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({open: false});
      };

      myFungsi=() =>{
          alert('hello wolrd');
      }

    render(){
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              disabled={false}
              onClick={this.handleClose}
            />,
          ];
          const radios = [];
          for (let i = 0; i < 30; i++) {
            radios.push(
              <RadioButton
                key={i}
                value={`value${i + 1}`}
                label={`Option ${i + 1}`}
                style={styles.radioButton}
              />
            );
          }

        return (
        <div>
            <h1>DETAIL USER</h1>
            <p>This is all of Detail</p>
            <RaisedButton label="Modal Dialog" onClick={this.myFungsi} />
            <br/>
            <Progressing />
            <p>ID USER </p>
            {/* modal dialog open */}
            <RaisedButton label="Modal Dialog" onClick={this.handleOpen} />
                <Dialog
                title="Dialog With Actions"
                actions={actions}
                modal={true}
                open={this.state.open}
                autoScrollBodyContent={true}
                >
                Only actions can close this dialog.
                Open a Date Picker dialog from within a dialog.
                <DatePicker hintText="Date Picker" />
                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                    {radios}
                </RadioButtonGroup>
                </Dialog>

            <p>
            <li><Link to="/">Go to HOME</Link></li>
            <li><Link to="/about">Go to About</Link></li>
            </p>
            <Formuser />
        </div>
         
        
        );
    }
}


export default Usersdetail;