import { types as ActionTypes } from './actions';

const initialState = {
    loadCameraLists: {
        refreshing: true,
        data: undefined,
    },
    loadCheckLists: {
        refreshing: true,
        data: undefined,
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOADCAMERALIST:
            return Object.assign({}, state, {
                loadCameraLists: {
                    ...state.loadCameraLists,
                    refreshing: true
                }
            });
        case ActionTypes.CAMERALIST_SUCCESS:
            return Object.assign({}, state, {
                loadCameraLists: {
                    ...state.loadCameraLists,
                    refreshing: false,
                    data: action.payload.data.data || []
                }
            });
        case ActionTypes.LOADCHECKLISTITEMS:
            return Object.assign({}, state, {
                loadCheckLists: {
                    ...state.loadCheckLists,
                    refreshing: true
                }
            });
        case ActionTypes.CHECKLIST_API_SUCCESS:
            return Object.assign({}, state, {
                loadCheckLists: {
                    ...state.loadCheckLists,
                    refreshing: false,
                    data: action.payload.data.items || []
                }
            });
        default:
            return state;
    }
}