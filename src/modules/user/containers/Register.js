import React, { Component } from 'react';
import { RegistrationView } from '../components';

class Register extends Component {
    render() {
        return (
            <RegistrationView {...this.props}/>
        );
    }
}

export default Register;