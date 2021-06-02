import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values: { name, email, mobileNumber, address, experience, tuitionType, boards, courses, classes, subjects, location, nameOfLastSchool } } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm Details" />
          <List>
            <ListItem
              primaryText="Name"
              secondaryText={ name }
            />
            <ListItem
              primaryText="Email"
              secondaryText={ email }
            />
            <ListItem
              primaryText="Mobile Number"
              secondaryText={ mobileNumber }
            />
            <ListItem
              primaryText="Address"
              secondaryText={ address }
            />
            <ListItem
              primaryText="Experience"
              secondaryText={ experience }
            />
            <ListItem
              primaryText="Tution Type"
              secondaryText={ tuitionType }
            />
            <ListItem
              primaryText="Boards"
              secondaryText={ boards }
            />
            <ListItem
              primaryText="Courses"
              secondaryText={ courses }
            />
            <ListItem
              primaryText="Classes"
              secondaryText={ classes }
            />
            <ListItem
              primaryText="Subjects"
              secondaryText={ subjects }
            />
            <ListItem
              primaryText="Location"
              secondaryText={ location }
            />
            <ListItem
              primaryText="Last Institute/School Taught"
              secondaryText={ nameOfLastSchool }
            />
          </List>
          <br/>
          <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
          <RaisedButton
            label="Back"
            primary={false}
            style={styles.button}
            onClick={this.back}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
}
export default Confirm;
