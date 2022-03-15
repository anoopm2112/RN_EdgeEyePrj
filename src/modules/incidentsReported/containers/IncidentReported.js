import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import * as Actions from '../actions';
import { IncidentsReportedView } from '../components';
import { getLoadIncidents, getLoadIncidentsData } from '../selectors';

class IncidentReported extends Component {
    render() {
        return (
            <IncidentsReportedView {...this.props} />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    incidentsList: getLoadIncidents,
});

const mapDispatchToProps = dispatch => ({
    galleryNaviagte: (data) => dispatch(Actions.navigateToGallery(data)),
    memoNavigate: () => dispatch(Actions.navigateToMemo()),
    loadIncidents: () => dispatch(Actions.loadIncidentsList())
});

export default connect(mapStateToProps, mapDispatchToProps)(IncidentReported);