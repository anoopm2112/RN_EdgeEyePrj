import { actions, MODULE_ROUTE_KEYS } from '../../common';
import { ROUTE_KEYS as USER_ROUTE_KEYS } from './constants';

const { action, navigation: { navigateWithReset, navigate } } = actions;

export const types = {
    AUTHENTICATE: 'User/AUTHENTICATE',
    AUTH_REQUEST: 'User/AUTH_REQUEST',
    AUTH_SUCCESS: 'User/AUTH_SUCCESS',
    AUTH_FAILED: 'User/AUTH_FAILED',
    FETCH_USER_INFO_REQUEST: 'User/FETCH_USER_INFO_REQUEST',
    FETCH_USER_INFO_SUCCESS: 'User/FETCH_USER_INFO_SUCCESS',
    FETCH_USER_INFO_FAILED: 'User/FETCH_USER_INFO_FAILED',
    LOGOUT_API_REQUEST: 'User/LOGOUT_API_REQUEST',
    LOGOUT_API_SUCCESS: 'User/LOGOUT_API_SUCCESS',
    LOGOUT_API_FAILED: 'User/LOGOUT_API_FAILED',
    CHANGEPASSWORD: 'User/CHANGEPASSWORD',
    CHANGEPASSWORD_API_REQUEST: 'User/CHANGEPASSWORD_API_REQUEST',
    CHANGEPASSWORD_API_SUCCESS: 'User/CHANGEPASSWORD_API_SUCCESS',
    CHANGEPASSWORD_API_FAILED: 'User/CHANGEPASSWORD_API_FAILED',
    UPDATEEDITPROFILE: 'User/UPDATEEDITPROFILE',
    UPDATEEDITPROFILE_API_REQUEST: 'User/UPDATEEDITPROFILE_API_REQUEST',
    UPDATEEDITPROFILE_API_SUCCESS: 'User/UPDATEEDITPROFILE_API_SUCCESS',
    UPDATEEDITPROFILE_API_FAILED: 'User/UPDATEEDITPROFILE_API_FAILED',
    SENTOTP: 'User/SENTOTP'
}

export function authenticate(data) {
    return action(types.AUTHENTICATE, { data });
}

export function navigateToLogin() {
    return navigateWithReset(MODULE_ROUTE_KEYS.USER, { screen: USER_ROUTE_KEYS.LOGIN_FORM });
}

export function navigateToDashboard() {
    return navigateWithReset(MODULE_ROUTE_KEYS.DASHBOARD);
}

export function navigateToAboutUs() {
    return navigate(MODULE_ROUTE_KEYS.USER, { screen: USER_ROUTE_KEYS.ABOUTUS });
}

export function navigateToEditProfile() {
    return navigate(MODULE_ROUTE_KEYS.USER, { screen: USER_ROUTE_KEYS.EDITPROFILE });
}

export function setAuthDataFromPersistantStorage(data) {
    return action(types.AUTH_SUCCESS, { data });
}

export function setUserInfoFromPersistantStorage(data) {
    return action(types.FETCH_USER_INFO_SUCCESS, { data });
}

export function logout() {
    return action(actions.types.LOG_OUT);
}

export function changePassword(data) {
    return action(types.CHANGEPASSWORD, { data });
}

export function updateEditProfile(data) {
    return action(types.UPDATEEDITPROFILE, { data })
}

export function navigateToForgotPassword() {
    return navigate(MODULE_ROUTE_KEYS.USER, { screen: USER_ROUTE_KEYS.FORGOTPASSWORD });
}

export function sentOTP(data) {
    return action(types.SENTOTP, {data});
}