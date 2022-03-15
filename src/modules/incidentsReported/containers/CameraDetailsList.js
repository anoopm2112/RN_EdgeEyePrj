import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CameraDetailsListView } from '../components';
import { getLoadIncidentsData } from '../selectors';
import * as Actions from '../actions';
class CameraDetailsList extends Component {
    render() {
        return(
            <CameraDetailsListView {...this.props}/>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    incidentsListData: getLoadIncidentsData
});

const mapDispatchToProps = dispatch => ({
    loadIncidentsData: () => dispatch(Actions.loadIncidentsData())
});

export default connect(mapStateToProps, mapDispatchToProps)(CameraDetailsList);