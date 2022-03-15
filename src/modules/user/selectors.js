import flow from 'lodash/fp/flow';
import { STATE_REDUCER_KEY } from './constants';

export const getUser = state => state[STATE_REDUCER_KEY];

const userAuthData = user => user.authData;
export const getUserAuthData = user => userAuthData(user);

const userInfo = user => user.info;
export const getUserInfo = flow(getUser, userInfo); 