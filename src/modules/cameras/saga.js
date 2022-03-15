import { all, takeLatest, fork } from 'redux-saga/effects';

import { saga } from '../../common';
import * as CameraListAPI from './api';
import * as Actions from './actions';

const { types: ActionTypes } = Actions;

function* loadCameraLists() {
    yield fork(saga.handleAPIRequest, CameraListAPI.getCamerasList);
}

function* loadCheckListItems() {
    yield fork(saga.handleAPIRequest, CameraListAPI.getCheckList);
}

export default function* dashboardSaga() {
    yield all([
        takeLatest(ActionTypes.LOADCAMERALIST, loadCameraLists),
        takeLatest(ActionTypes.LOADCHECKLISTITEMS, loadCheckListItems)
    ])
}