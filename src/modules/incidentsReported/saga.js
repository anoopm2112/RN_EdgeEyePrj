import { all, takeLatest, fork, take, put } from 'redux-saga/effects';

import { saga } from '../../common';
import * as IncidentsAPI from './api';
import * as CameraAPI from '../cameras/api';
import * as Actions from './actions';

const { types: ActionTypes } = Actions;

function* loadCameraLists() {
    yield fork(saga.handleAPIRequest, IncidentsAPI.getIncidents);
}

function* loadIncidentData() {
    yield fork(saga.handleAPIRequest, CameraAPI.getCamerasList);
}

function* createMemo(action) {
    yield fork(saga.handleAPIRequest, IncidentsAPI.createMemo, action.payload.data);
    const createMemoSuccessAction = yield take(Actions.types.MEMO_CREATE_API_SUCCESS);
    console.log(createMemoSuccessAction);
}

export default function* incidentsSaga() {
    yield all([
        takeLatest(ActionTypes.LOAD_INCIDENTS, loadCameraLists),
        takeLatest(ActionTypes.LOAD_INCIDENTS_DATA, loadIncidentData),
        takeLatest(ActionTypes.MEMO_CREATE, createMemo)
    ])
}