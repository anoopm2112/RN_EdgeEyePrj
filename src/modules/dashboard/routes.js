import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { ROUTE_KEYS } from './constants';
import { Home, SideBar, DashboardCount } from './containers';

const { Navigator, Screen } = createDrawerNavigator();

export default function DashboardNavigation() {

    const [initRender, setInitRender] = React.useState(true);

    React.useEffect(() => {
        setInitRender(false); // Fix to blink issue on load page
    }, [initRender]);

    return (
        <Navigator drawerContent={props => <SideBar {...props} />}
            drawerStyle={{ width: initRender ? null : '75%' }}
            headerMode="none">
            <Screen name={ROUTE_KEYS.HOME} component={Home} />
            <Screen name={ROUTE_KEYS.DASHBOARDCOUNT} component={DashboardCount} />
        </Navigator>
    );
}