import { api } from '../../common';
import { types as ActionTypes } from './actions';

const { restAPI } = api;

export function authenticate({ username, password }) {
    let payload = {
        body: { username, password },
        types: [ActionTypes.AUTH_REQUEST, ActionTypes.AUTH_SUCCESS, ActionTypes.AUTH_FAILED]
    };
    return {
        endpoint: 'users/login',
        api: restAPI.post,
        payload
    };
}

export function getUserInfo() {
    let payload = {
        types: [ActionTypes.FETCH_USER_INFO_REQUEST, ActionTypes.FETCH_USER_INFO_SUCCESS, ActionTypes.FETCH_USER_INFO_FAILED]
    };
    return {
        endpoint: 'account/get-profile',
        api: restAPI.get,
        payload,
    };
}

export function changePassword({ old_password, password, password_repeat }) {
    let payload = {
        body: { old_password, password, password_repeat },
        types: [ActionTypes.CHANGEPASSWORD_API_REQUEST, ActionTypes.CHANGEPASSWORD_API_SUCCESS, ActionTypes.CHANGEPASSWORD_API_FAILED]
    };
    return {
        endpoint: 'account/change-password',
        api: restAPI.post,
        payload,
    };
}

export function editProfile({ name, phone, profilePic }) {
    let payload = {
        body: { name, phone, profilePic },
        types: [ActionTypes.UPDATEEDITPROFILE_API_REQUEST, ActionTypes.UPDATEEDITPROFILE_API_SUCCESS, ActionTypes.UPDATEEDITPROFILE_API_FAILED]
    };
    return {
        endpoint: 'account/update-profile',
        api: restAPI.post,
        payload,
    };
}