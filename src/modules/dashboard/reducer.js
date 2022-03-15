import { actions as CommonActions } from '../../common';
import { types as ActionTypes } from './actions';

const { types: CommonActionsTypes } = CommonActions;

const initialState = {
    sideBar: {
        currentRoute: undefined
    },
    dashboardCounts: {
        refreshing: true,
        data: undefined,
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CommonActionsTypes.ROUTE_CHANGED:
            return Object.assign({}, state, {
                sideBar: {
                    currentRoute: action.payload.name
                }
            });
        case ActionTypes.CAMERACOUNT:
            return Object.assign({}, state, {
                dashboardCounts: {
                    ...state.dashboardCounts,
                    refreshing: true
                }
            });
        case ActionTypes.SET_DASHBOARD_COUNTS:
            return Object.assign({}, state, {
                dashboardCounts: {
                    ...state.dashboardCounts,
                    refreshing: false,
                    data: action.payload.data || []
                }
            });
        default:
            return state;
    }
}