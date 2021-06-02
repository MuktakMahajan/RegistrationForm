import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormProfessionalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Professional Details" />
          <TextField
            hintText="Enter Tution Type"
            floatingLabelText="Tution Type"
            onChange={handleChange('tuitionType')}
            defaultValue={values.tuitionType}
          />
          <br/>
          <TextField
            hintText="Enter Your Board"
            floatingLabelText="Boards"
            onChange={handleChange('boards')}
            defaultValue={values.boards}
          />
          <br/>
          <TextField
            hintText="Enter Your Course"
            floatingLabelText="Courses"
            onChange={handleChange('courses')}
            defaultValue={values.courses}
          />
          <br/>
          <TextField
            hintText="Enter Your Class"
            floatingLabelText="Class"
            onChange={handleChange('classes')}
            defaultValue={values.classes}
          />
          <br/>
          <TextField
            hintText="Enter Your Subjects"
            floatingLabelText="Subjects"
            onChange={handleChange('subjects')}
            defaultValue={values.subjects}
          />
          <br/>
          <TextField
            hintText="Enter Your Location"
            floatingLabelText="Location"
            onChange={handleChange('location')}
            defaultValue={values.location}
          />
          <br/>
          <TextField
            hintText="Last Institute/School Taught"
            floatingLabelText="Last Institute/School Taught"
            onChange={handleChange('nameOfLastSchool')}
            defaultValue={values.nameOfLastSchool}
          />
          <br/>
          <RaisedButton
            label="Continue"
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
export default FormProfessionalDetails;
