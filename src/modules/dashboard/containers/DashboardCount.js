import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as Actions from '../actions';
import { DashboardCountView } from '../components';
import { getDashboardCounts } from '../selectors';

class DashboardCount extends Component {
    render() {
        return(
            <DashboardCountView {...this.props}/>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    dashBoardCountList: getDashboardCounts
});

const mapDispatchToProps = dispatch => ({
    cameraCountsDashboard: () => dispatch(Actions.dashboardCameraCounts())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardCount);