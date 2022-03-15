import { actions, MODULE_ROUTE_KEYS } from '../../common';
import { ROUTE_KEYS as DASHBOARD_ROUTE_KEYS } from './constants';
import { ROUTE_KEYS as INCIDENTREPORTED_ROUTE_KEYS } from '../incidentsReported/constants';
import { ROUTE_KEYS as CAMERALIST_ROUTE_KEYS } from '../cameras/constants';

const { action, navigation: { navigate, navigateWithReset } } = actions;

export const types = {
    CAMERACOUNT: 'Dashboard/CAMERACOUNT',
    DASHBOARD_COUNT_REQUEST: 'Dashboard/DASHBOARD_COUNT_REQUEST',
    DASHBOARD_COUNT_SUCCESS: 'Dashboard/DASHBOARD_COUNT_SUCCESS',
    DASHBOARD_COUNT_FAILED: 'Dashboard/DASHBOARD_COUNT_FAILED',
    LOAD_DASHBOARD_COUNTS: 'Dashboard/LOAD_DASHBOARD_COUNTS',
    SET_DASHBOARD_COUNTS: 'Dashboard/SET_DASHBOARD_COUNTS'
};

export function navigateToDashboard() {
    return navigateWithReset(MODULE_ROUTE_KEYS.DASHBOARD, { screen: DASHBOARD_ROUTE_KEYS.HOME });
}

export function navigateToDashboardCount() {
    return navigate(MODULE_ROUTE_KEYS.DASHBOARD, { screen: DASHBOARD_ROUTE_KEYS.DASHBOARDCOUNT });
}

export function navigateToIncidentReported(data) {
    return navigate(MODULE_ROUTE_KEYS.INCIDENTREPORT, { screen: INCIDENTREPORTED_ROUTE_KEYS.TOPTABBARIR, params: { data } });
}

export function navigateToCameraList() {
    return navigate(MODULE_ROUTE_KEYS.CAMERALIST, { screen: CAMERALIST_ROUTE_KEYS.CAMERALIST });
}

export function dashboardCameraCounts() {
    return action(types.CAMERACOUNT);
}

export function setDashboardCounts(data) {
    return action(types.SET_DASHBOARD_COUNTS, { data });
}