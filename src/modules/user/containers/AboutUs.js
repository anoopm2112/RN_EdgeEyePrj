import React, { Component } from 'react';
import { AboutUsView } from '../components';

class AboutUs extends Component {
    render() {
        return(
            <AboutUsView {...this.props}/>
        );
    }
}

export default AboutUs;