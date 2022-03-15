import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { SideBarView } from '../components';
import { getSideBarData } from '../selectors';
import * as UserActions from '../../user/actions';

class SideBar extends Component {
    render() {
        return (
            <SideBarView {...this.props} />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    sideBar: getSideBarData
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(UserActions.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
