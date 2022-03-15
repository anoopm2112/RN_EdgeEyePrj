import flow from 'lodash/fp/flow';
import { STATE_REDUCER_KEY } from './constants';

export const getDashboard = state => state[STATE_REDUCER_KEY];

const sideBar = dashboard => dashboard.sideBar;
export const getSideBarData = flow(getDashboard, sideBar);

const dashboardCounts = dashboard => dashboard.dashboardCounts;
export const getDashboardCounts = flow(getDashboard, dashboardCounts);