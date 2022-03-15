import React, { Component } from 'react';
import { GalleryView } from '../components';
import { connect } from 'react-redux';

class Gallery extends Component {
    render() {
        return (
            <GalleryView {...this.props} />
        );
    }
}

export default connect(null, null)(Gallery);