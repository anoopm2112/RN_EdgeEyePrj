import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ChangePasswordView } from '../components';
import * as Actions from '../actions';

class ChangePassword extends Component {
    render() {
        return(
            <ChangePasswordView {...this.props}/>
        );
    }
}

const mapPropsToDispatch = dispatch => ({
    changePassword: (data) => dispatch(Actions.changePassword(data))
});

export default connect(null, mapPropsToDispatch)(ChangePassword);