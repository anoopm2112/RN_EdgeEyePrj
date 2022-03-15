import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MODULE_ROUTE_KEYS } from '../common';
import * as User from '../modules/user';
import * as Dashboard from '../modules/dashboard';
import * as IncidentsReported from '../modules/incidentsReported';
import * as Cameras from '../modules/cameras';
import * as Splash from '../modules/splash';

const { Navigator, Screen } = createStackNavigator();

export default function RootNavigation() {
    return(
        <Navigator initialRouteName={MODULE_ROUTE_KEYS.SPLASH} headerMode={'none'}>
            <Screen name={MODULE_ROUTE_KEYS.SPLASH} component={Splash.routes} />
            <Screen name={MODULE_ROUTE_KEYS.USER} component={User.routes} />
            <Screen name={MODULE_ROUTE_KEYS.DASHBOARD} component={Dashboard.routes} />
            <Screen name={MODULE_ROUTE_KEYS.INCIDENTREPORT} component={IncidentsReported.routes} />
            <Screen name={MODULE_ROUTE_KEYS.CAMERALIST} component={Cameras.routes} />
        </Navigator>
    );
}