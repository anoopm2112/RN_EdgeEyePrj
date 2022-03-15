import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { EditProfileView } from '../components';
import * as Actions from '../actions';
import { getUser } from '../selectors';

class EditProfile extends Component {
    render() {
        return(
            <EditProfileView {...this.props}/>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    user: getUser
});

const mapPropsToDispatch = dispatch => ({
    updateEditProfile: (data) => dispatch(Actions.updateEditProfile(data))
});

export default connect(mapStateToProps, mapPropsToDispatch)(EditProfile);