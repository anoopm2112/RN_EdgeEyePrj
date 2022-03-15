import { types as ActionTypes } from './actions';
import { types as CameraActionTypes } from '../cameras/actions';

const initialState = {
    loadIncidents: {
        refreshing: true,
        data: undefined
    },
    loadIncidentsData: {
        refreshing: true,
        data: undefined
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_INCIDENTS:
            return Object.assign({}, state, {
                loadIncidents: {
                    ...state.loadIncidents,
                    refreshing: true
                }
            });
        case ActionTypes.INCIDENTS_API_SUCCESS:
            return Object.assign({}, state, {
                loadIncidents: {
                    ...state.loadIncidents,
                    refreshing: false,
                    data: action.payload.data.items || []
                }
            });
        case CameraActionTypes.CAMERALIST_SUCCESS:
            return Object.assign({}, state, {
                loadIncidentsData: {
                    ...state.loadIncidentsData,
                    refreshing: false,
                    data: action.payload.data.data || []
                }
            });
        default:
            return state;
    }
}