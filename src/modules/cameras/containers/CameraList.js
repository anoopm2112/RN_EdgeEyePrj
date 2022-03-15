import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CameraListView } from '../components';
import * as Actions from '../actions';
import { getLoadCameraLists } from '../selectors';

class CameraList extends Component {
    render() {
        return (
            <CameraListView {...this.props} />
        );
    }
}

const mapStateToProps = createStructuredSelector({
    loadCamerasList: getLoadCameraLists
});

const mapDispatchToProps = dispatch => ({
    checkListNavigate: () => dispatch(Actions.navigateToCheckList()),
    cameraListLoad: () => dispatch(Actions.loadCameraList()),
    loadCheckListItems: () => dispatch(Actions.loadCheckListItems()),
    cameraCardDetailsNavigate: (data) => dispatch(Actions.navigateToCameraCardDetails(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(CameraList);