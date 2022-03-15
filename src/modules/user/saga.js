import { all, takeLatest, fork, take, put, call } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import { saga, actions as CommonActions } from '../../common';
import { types as ActionTypes } from './actions';
import * as Actions from './actions';
import * as DashboardActions from '../dashboard/actions';
import * as UserAPI from './api';
import { AUTH_DATA_STORE_KEY, USER_INFO_STORE_KEY } from './constants';

const { types: CommonActionTypes } = CommonActions;

function* authenticate(action) {
    yield fork(saga.handleAPIRequest, UserAPI.authenticate, action.payload.data);
    const authSuccessAction = yield take(ActionTypes.AUTH_SUCCESS, ActionTypes.AUTH_FAILED);

    yield fork(saga.handleAPIRequest, UserAPI.getUserInfo);
    const userInfoSuccessAction = yield take(ActionTypes.FETCH_USER_INFO_SUCCESS);

    yield call([AsyncStorage, 'setItem'], AUTH_DATA_STORE_KEY, JSON.stringify(authSuccessAction.payload.data));
    yield call([AsyncStorage, 'setItem'], USER_INFO_STORE_KEY, JSON.stringify(userInfoSuccessAction.payload.data));

    yield put(DashboardActions.navigateToDashboard());
}

function* handleLogout() {
    yield call([AsyncStorage, 'removeItem'], USER_INFO_STORE_KEY);
    yield call([AsyncStorage, 'removeItem'], AUTH_DATA_STORE_KEY);
    yield put(Actions.navigateToLogin());
}

function* changePassword(action) {
    yield fork(saga.handleAPIRequest, UserAPI.changePassword, action.payload.data);
}

function* updateEditProfile(action) {
    yield fork(saga.handleAPIRequest, UserAPI.editProfile, action.payload.data);
}

function* sentOTP(action) {
    console.log('___SentOTP', action.payload.data);
}

export default function* userSaga() {
    yield all([
        takeLatest(ActionTypes.AUTHENTICATE, authenticate),
        takeLatest(ActionTypes.CHANGEPASSWORD, changePassword),
        takeLatest(CommonActionTypes.LOG_OUT, handleLogout),
        takeLatest(ActionTypes.UPDATEEDITPROFILE, updateEditProfile),
        takeLatest(ActionTypes.SENTOTP, sentOTP)
    ]);
}