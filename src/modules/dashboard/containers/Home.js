import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HomeView } from '../components';
import * as Actions from '../actions';

class Home extends Component {
    render() {
        return (
            <HomeView {...this.props}/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    dashboardCountNavigate: () => dispatch(Actions.navigateToDashboardCount()),
    incidentReportedNavigate: (data) => dispatch(Actions.navigateToIncidentReported(data)),
    cameraListNavigate: () => dispatch(Actions.navigateToCameraList())
});

export default connect(null, mapDispatchToProps)(Home);