import flow from 'lodash/fp/flow';
import { STATE_REDUCER_KEY } from './constants';

export const getCameras = state => state[STATE_REDUCER_KEY];

const loadCameraLists = cameras => cameras.loadCameraLists;
export const getLoadCameraLists = flow(getCameras, loadCameraLists);

const loadCheckLists = cameras => cameras.loadCheckLists;
export const getLoadCheckLists = flow(getCameras, loadCheckLists);
