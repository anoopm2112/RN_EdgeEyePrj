import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as Actions from '../actions';
import { SplashView } from '../components';

class Splash extends Component {

    componentDidMount() {
        this.props.runPreliminaryChecks();
    }

    render() {
        return(
            <SplashView {...this.props}/>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    runPreliminaryChecks: () => dispatch(Actions.runPreliminaryChecks())
});

export default connect(null, mapDispatchToProps)(Splash);