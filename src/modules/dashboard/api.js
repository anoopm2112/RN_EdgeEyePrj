import { api } from '../../common';
import { types as ActionTypes } from './actions';

const { restAPI } = api;

export function getDashboardCounts() {
    let payload = {
        types: [ActionTypes.DASHBOARD_COUNT_REQUEST, ActionTypes.DASHBOARD_COUNT_SUCCESS, ActionTypes.DASHBOARD_COUNT_FAILED]
    };
    return {
        endpoint: 'account/dashboard',
        api: restAPI.get,
        payload,
    };
}