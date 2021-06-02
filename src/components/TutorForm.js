import React, { Component } from 'react';
import FormTutorDetails from './FormTutorDetails';
import FormProfessionalDetails from './FormProfessionalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class TutorForm extends Component {
  state = {
    step: 1,
    name: '',
    email: '',
    mobileNumber: '',
    address: '',
    experience: '',
    tuitionType: '',
    boards: '',
    courses: '',
    classes: '',
    subjects: '',
    location: '',
    nameOfLastSchool: ''
  };

  //pointer function
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //pointer function
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  };

  render() {
    const { step } = this.state;
    const { name, email, mobileNumber, address, experience, tuitionType, boards, courses, classes, subjects, location, nameOfLastSchool } = this.state;
    const values = { name, email, mobileNumber, address, experience, tuitionType, boards, courses, classes, subjects, location, nameOfLastSchool };
    switch(step) {
      case 1:
        return (
          <FormTutorDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormProfessionalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default TutorForm
