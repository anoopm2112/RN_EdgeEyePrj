import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE_KEYS } from './constants';
import { CameraList, CheckList, CameraCardDetails } from './containers';

const { Navigator, Screen } =  createStackNavigator();

export default function CameraNavigation() {
    return(
        <Navigator initialRouteName={ROUTE_KEYS.CAMERALIST} headerMode={'none'}>
            <Screen name={ROUTE_KEYS.CAMERALIST} component={CameraList} />
            <Screen name={ROUTE_KEYS.CHECKLIST} component={CheckList} />
            <Screen name={ROUTE_KEYS.CAMERACARDDETAILS} component={CameraCardDetails} />
        </Navigator>
    );
}