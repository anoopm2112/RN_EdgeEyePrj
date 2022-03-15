import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import * as Actions from './actions';
import * as UserActions from '../user/actions';
import * as DashboardActions from '../dashboard/actions';
import { AUTH_DATA_STORE_KEY, USER_INFO_STORE_KEY } from '../user/constants';

const { types: ActionTypes } = Actions;

function* runPreliminaryChecks() {
    let authData = yield call([AsyncStorage, 'getItem'], AUTH_DATA_STORE_KEY);
    authData = authData ? JSON.parse(authData) : null;
    let userInfo = yield call([AsyncStorage, 'getItem'], USER_INFO_STORE_KEY);
    userInfo = userInfo ? JSON.parse(userInfo) : null;

    if (authData && userInfo) {
        yield put(UserActions.setAuthDataFromPersistantStorage(authData));
        yield put(UserActions.setUserInfoFromPersistantStorage(userInfo));

        yield put(DashboardActions.navigateToDashboard())
    } else {
        yield put(UserActions.navigateToLogin());
    }
}

export default function* splashSaga() {
    yield all([
        takeLatest(ActionTypes.RUN_PRELIMINARY_CHECKS, runPreliminaryChecks)
    ]);
}