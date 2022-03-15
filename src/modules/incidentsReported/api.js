import { api } from '../../common';
import { types as ActionTypes } from './actions';

const { restAPI } = api;

export function getIncidents() {
    let payload = {
        types: [ActionTypes.INCIDENTS_API_REQUEST, ActionTypes.INCIDENTS_API_SUCCESS, ActionTypes.INCIDENTS_API_FAILED]
    };
    return {
        endpoint: 'incidents',
        api: restAPI.get,
        payload,
    };
}

export function createMemo({ name, email, address, subject, memo_type_id, amount, act_and_rule, description }) {
    let payload = {
        body: {
            name,
            email,
            address,
            subject,
            memo_type_id,
            amount,
            act_and_rule,
            description
        },
        types: [ActionTypes.MEMO_CREATE_API_REQUEST, ActionTypes.MEMO_CREATE_API_SUCCESS, ActionTypes.MEMO_CREATE_API_FAILED]
    };
    return {
        endpoint: 'memos/add',
        api: restAPI.post,
        payload
    }
}