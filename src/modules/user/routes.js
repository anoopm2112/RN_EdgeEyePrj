import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTE_KEYS } from './constants';
import {
    Login, Register, AboutUs, ChangePassword, Profile, EditProfile,
    ForgotPassword
} from './containers';

const { Navigator, Screen } = createStackNavigator();

export default function UserNavigation() {
    return (
        <Navigator initialRouteName={ROUTE_KEYS.LOGIN_FORM} headerMode={'none'}>
            <Screen name={ROUTE_KEYS.LOGIN_FORM} component={Login} />
            <Screen name={ROUTE_KEYS.REGISTER_FORM} component={Register} />
            <Screen name={ROUTE_KEYS.ABOUTUS} component={AboutUs} />
            <Screen name={ROUTE_KEYS.CHANGEPASSWORD} component={ChangePassword} />
            <Screen name={ROUTE_KEYS.PROFILE} component={Profile} />
            <Screen name={ROUTE_KEYS.EDITPROFILE} component={EditProfile} />
            <Screen name={ROUTE_KEYS.FORGOTPASSWORD} component={ForgotPassword} />
        </Navigator>
    );
}