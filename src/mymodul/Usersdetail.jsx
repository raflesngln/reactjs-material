import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import DatePicker from 'material-ui/DatePicker';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Formuser from './users/Create_users';
import Progressing from './mytools/Progressing';
import './mystyle.css';
import AutoComplete from 'material-ui/AutoComplete';
import {
    Route,
    Link
  } from 'react-router-dom';
  const styles = {
    radioButton: {
      marginTop: 16,
    },
  };
  
  const peoples = [
      'rafles',
      'budi',
      'mawar',
      'david',
      'adam',
      'arni',
      'andi',
      'beni',
      'rani',
      'reni'
    ];
    
    const menuPeople = {
      desktop: true,
      disableAutoFocus: true,
    };
// strart classs===============================
class Usersdetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "Rafles Nainggolan",
            address:'jakarta barat',
            open: false,
            loading: true
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
      componentDidMount() {
        //this.setState ({loading: false})
        setTimeout(() => this.setState({ loading: false }), 600); // simulates an async action, and hides the spinner
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
          for (let i = 0; i < 15; i++) {
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
          //this is for progress loading component
          this.state.loading ? <Progressing /> :
        <div>
            <h1>DETAIL USER</h1>
            <p>This is all of Detail</p>
            <p>ID USER </p>
            {/* modal dialog open */}
            <RaisedButton label="Modal Dialog" primary={true} onClick={this.handleOpen} />
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
                <AutoComplete
                      hintText="Type Name"
                      dataSource={peoples}
                      menuProps={menuPeople}
                    />
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