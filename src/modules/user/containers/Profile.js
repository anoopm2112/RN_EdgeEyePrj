import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ProfileView } from '../components';
import { getUser } from '../selectors';
import * as Actions from '../actions';

class Profile extends Component {
    render() {
        return(
            <ProfileView {...this.props}/>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    user: getUser
});

const mapPropsToDispatch = dispatch => ({
    editProfileNavigate: (data) => dispatch(Actions.navigateToEditProfile(data))
});

export default connect(mapStateToProps, mapPropsToDispatch)(Profile);