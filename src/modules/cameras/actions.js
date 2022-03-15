import { actions, MODULE_ROUTE_KEYS } from '../../common';
import { ROUTE_KEYS as CAMERALIST_ROUTE_KEYS } from './constants';

const { action, navigation: { navigate, navigateWithReset } } = actions;

export const types = {
    LOADCAMERALIST: 'cameras/LOADCAMERALIST',
    SETCAMERALIST: 'cameras/SETCAMERALIST',
    CAMERALIST_REQUEST: 'cameras/CAMERALIST_REQUEST',
    CAMERALIST_SUCCESS: 'cameras/CAMERALIST_SUCCESS',
    CAMERALIST_FAILED: 'cameras/CAMERALIST_FAILED',
    CHECKLIST_API_REQUEST: 'cameras/CHECKLIST_API_REQUEST',
    CHECKLIST_API_SUCCESS: 'cameras/CHECKLIST_API_SUCCESS',
    CHECKLIST_API_FAILED: 'cameras/CHECKLIST_API_FAILED',
    LOADCHECKLISTITEMS: 'cameras/LOADCHECKLISTITEMS'
};

export function navigateToCheckList() {
    return navigate(CAMERALIST_ROUTE_KEYS.CHECKLIST);
}

export function navigateToCameraCardDetails(data) {
    // return navigate(MODULE_ROUTE_KEYS.CAMERALIST, { screen: CAMERALIST_ROUTE_KEYS.CAMERACARDDETAILS, params: { data } });
    return navigate(CAMERALIST_ROUTE_KEYS.CAMERACARDDETAILS);
}

export function loadCameraList() {
    return action(types.LOADCAMERALIST);
}

export function setCameraList(data) {
    return action(types.SETCAMERALIST, { data });
}

export function loadCheckListItems() {
    return action(types.LOADCHECKLISTITEMS);
}