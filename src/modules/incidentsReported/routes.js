import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE_KEYS } from './constants';
import { IncidentReported, Gallery, Memo, TopTabBarIR } from './containers';

const { Navigator, Screen } =  createStackNavigator();

export default function IncidentReportedNavigation() {
    return(
        <Navigator initialRouteName={ROUTE_KEYS.INCIDENTREPORTED} headerMode={'none'}>
            <Screen name={ROUTE_KEYS.INCIDENTREPORTED} component={IncidentReported} />
            <Screen name={ROUTE_KEYS.GALLERY} component={Gallery} />
            <Screen name={ROUTE_KEYS.MEMO} component={Memo} />
            <Screen name={ROUTE_KEYS.TOPTABBARIR} component={TopTabBarIR} />
        </Navigator>
    );
}