import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MemoView } from '../components';
import * as Actions from '../actions';

class Memo extends Component {
    render() {
        return (
            <MemoView {...this.props}/>
        )
    }
}

const mapPropsToDispatch = dispatch => ({
    memoCreate: (data) => dispatch(Actions.createMemo(data))
});

export default connect(null, mapPropsToDispatch)(Memo);