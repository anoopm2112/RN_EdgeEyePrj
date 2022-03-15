import { all, takeLatest, fork, take, put } from 'redux-saga/effects';
import _ from 'lodash';

import { saga } from '../../common';
import * as DashboardCountAPI from './api';
import * as Actions from './actions';
import { ROLE_BASED_VISIBILITY, LSI_ADMIN_ROLES } from './constants';

const { types: ActionTypes } = Actions;

function* dashboardCameraCounts() {
    let data = [];
    yield fork(saga.handleAPIRequest, DashboardCountAPI.getDashboardCounts);
    const dashboardCountSuccessAction = yield take(ActionTypes.DASHBOARD_COUNT_SUCCESS);

    if (dashboardCountSuccessAction.payload.data.role === 'secretary' || 'mayor' || 'president' || 'ho_hs' || 'hi_jhi' || 'site-engineer') {
        roleBased = _.omit(dashboardCountSuccessAction.payload.data, ROLE_BASED_VISIBILITY);
    }

    if (dashboardCountSuccessAction.payload.data.role === 'lsgi-admin') {
        roleBased = _.omit(dashboardCountSuccessAction.payload.data, LSI_ADMIN_ROLES);
    }

    if (dashboardCountSuccessAction.payload.data.role === 'supervisor') {
        roleBased = _.omit(dashboardCountSuccessAction.payload.data, LSI_ADMIN_ROLES);
    }

    if (dashboardCountSuccessAction.payload.data.role === 'super-admin') {
        data.push(dashboardCountSuccessAction.payload.data);
    }

    data.push(roleBased);

    yield put(Actions.setDashboardCounts(data));
}

export default function* dashboardSaga() {
    yield all([
        takeLatest(ActionTypes.CAMERACOUNT, dashboardCameraCounts)
    ])
}