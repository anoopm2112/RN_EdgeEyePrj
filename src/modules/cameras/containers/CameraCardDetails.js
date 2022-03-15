import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CameraCardDetailsView } from '../components';

class CameraCardDetails extends Component {
    render() {
        return(
            <CameraCardDetailsView {...this.props}/>
        );
    }
}

export default connect(null, null)(CameraCardDetails);