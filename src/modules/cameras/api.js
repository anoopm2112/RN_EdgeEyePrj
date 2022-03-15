import { api } from '../../common';
import { types as ActionTypes } from './actions';

const { restAPI } = api;

export function getCamerasList() {
    let payload = {
        types: [ActionTypes.CAMERALIST_REQUEST, ActionTypes.CAMERALIST_SUCCESS, ActionTypes.CAMERALIST_FAILED]
    };
    return {
        endpoint: 'camera/list',
        api: restAPI.get,
        payload,
    };
}

export function getCheckList() {
    let payload = {
        types: [ActionTypes.CHECKLIST_API_REQUEST, ActionTypes.CHECKLIST_API_SUCCESS, ActionTypes.CHECKLIST_API_FAILED]
    };
    return {
        endpoint: 'camera-installation/get-camera-installation-check-list',
        api: restAPI.get,
        payload,
    };
}