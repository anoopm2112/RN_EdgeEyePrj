import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { LoginView } from '../components';
import * as Actions from '../actions';
import { getUser } from '../selectors';


class Login extends Component {
    render() {
        return (
            <LoginView {...this.props}/>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    user: getUser
});

const mapDispatchToProps = dispatch => ({
    authenticate: (values) => dispatch(Actions.authenticate(values)),
    forgotPasswordNavigate: () => dispatch(Actions.navigateToForgotPassword())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);