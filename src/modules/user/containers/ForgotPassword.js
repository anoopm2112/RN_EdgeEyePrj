import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ForgotPasswordView } from '../components';
import * as Actions from '../actions';

class ForgotPassword extends Component {
    render() {
        return(
            <ForgotPasswordView {...this.props}/>
        );
    }
}

const mapPropsToDispatch = dispatch => ({
    sentOTP: (data) => dispatch(Actions.sentOTP(data))
});

export default connect(null, mapPropsToDispatch)(ForgotPassword);