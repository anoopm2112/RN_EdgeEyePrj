import { actions, MODULE_ROUTE_KEYS } from '../../common';
import { ROUTE_KEYS as INCIDENTREPORTED_ROUTE_KEYS } from './constants';

const { action, navigation: { navigate, navigateWithReset } } = actions;

export const types = {
    INCIDENTS_API_REQUEST: 'incidents/INCIDENTS_API_REQUEST',
    INCIDENTS_API_SUCCESS: 'incidents/INCIDENTS_API_SUCCESS',
    INCIDENTS_API_FAILED: 'incidents/INCIDENTS_API_FAILED',
    LOAD_INCIDENTS: 'incidents/LOAD_INCIDENTS',
    LOAD_INCIDENTS_DATA: 'incidents/LOAD_INCIDENTS_DATA',

    INCIDENT_API_ACTION: 'incidents/INCIDENT_API_ACTION',
    MEMO_CREATE: 'incidents/MEMO_CREATE',
    MEMO_CREATE_API_REQUEST: 'incident/MEMO_CREATE_API_REQUEST',
    MEMO_CREATE_API_SUCCESS: 'incident/MEMO_CREATE_API_SUCCESS',
    MEMO_CREATE_API_FAILED: 'incident/MEMO_CREATE_API_FAILED'
};

export function navigateToGallery(data) {
    return navigate(MODULE_ROUTE_KEYS.INCIDENTREPORT, { screen: INCIDENTREPORTED_ROUTE_KEYS.GALLERY, params: { data } });
}

export function navigateToMemo() {
    return navigate(INCIDENTREPORTED_ROUTE_KEYS.MEMO);
}

export function loadIncidentsList() {
    return action(types.LOAD_INCIDENTS);
}

export function loadIncidentsData() {
    return action(types.LOAD_INCIDENTS_DATA);
}

export function createMemo(data) {
    return action(types.MEMO_CREATE, { data })
}