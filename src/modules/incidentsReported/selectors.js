import flow from 'lodash/fp/flow';
import { STATE_REDUCER_KEY } from './constants';

export const getIncidents = state => state[STATE_REDUCER_KEY];

const loadIncidents= incidents => incidents.loadIncidents;
export const getLoadIncidents = flow(getIncidents, loadIncidents);

const loadIncidentsData= incidents => incidents.loadIncidentsData;
export const getLoadIncidentsData = flow(getIncidents, loadIncidentsData);