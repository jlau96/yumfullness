import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails';
import Confirm from './Confirm';
import Success from './Success';
import NotFound from '../NotFound/NotFound';

export class UserForm extends Component {
    state = {
        step: 1,
        name: '',
        methodOfContact: '',
        email: '',
        phone: '',
        message: ''
    }

    // proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step, name, methodOfContact, email, phone, message } = this.state;
        const values = { step, name, methodOfContact, email, phone, message };

        switch(step) {
            case 1:
                return (
                    <FormUserDetails nextStep = { this.nextStep } handleChange = { this.handleChange } values = { values } />
                );
            case 2:
                return (
                    <Confirm
                        nextStep = { this.nextStep }
                        prevStep = { this.prevStep }
                        values = { values }
                    />
                );
            case 3:
                return <Success />;
            default:
                return <NotFound />;
        }
    }
}

export default UserForm
