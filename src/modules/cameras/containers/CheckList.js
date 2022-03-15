import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CheckListView } from '../components';
import * as Actions from '../actions';
import { getLoadCheckLists } from '../selectors';

class CheckList extends Component {
    render() {
        return(
            <CheckListView {...this.props}/>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    loadCheckLists : getLoadCheckLists
});

const mapDispatchToProps = dispatch => ({
    loadCheckListItems: () => dispatch(Actions.loadCheckListItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckList);