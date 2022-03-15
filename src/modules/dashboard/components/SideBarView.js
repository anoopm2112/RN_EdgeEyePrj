import React, { useCallback } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import IMAGES from '../../../common/icons/AssetIcons';
import COLORS from '../../../common/constants/colorConst';
import { MODULE_ROUTE_KEYS, components, utils } from '../../../common';
import { ROUTE_KEYS as DASHBOARD_ROUTE_KEYS } from '../../dashboard/constants';
import { ROUTE_KEYS as USER_ROUTE_KEYS } from '../../user/constants';

const { Content, Icon } = components;
const { dimensionUtils: { convertHeight, convertWidth } } = utils;

const SideBarView = (props) => {

    const routes = useCallback(() => {
        let key = 0;
        return [
            {
                key: key++,
                title: 'Home',
                drawerIcon: () => <Icon type="FontAwesome" name="home" style={{ fontSize: convertHeight(29), color: COLORS.SIDEBAR }}/>,
                name: DASHBOARD_ROUTE_KEYS.HOME,
                params: {}
            },
            {
                key: key++,
                title: 'Profile',
                drawerIcon: () => <Icon type="FontAwesome" name="user-circle-o" style={{ fontSize: convertHeight(25), color: COLORS.SIDEBAR }} />,
                name: MODULE_ROUTE_KEYS.USER,
                params: {
                    screen: USER_ROUTE_KEYS.PROFILE
                }
            },
            {
                key: key++,
                title: 'Change Password',
                drawerIcon: () => <Icon type="FontAwesome5" name="lock" style={{ fontSize: convertHeight(25.5), color: COLORS.SIDEBAR }}/>,
                name: MODULE_ROUTE_KEYS.USER,
                params: {
                    screen: USER_ROUTE_KEYS.CHANGEPASSWORD
                }
            },
            {
                key: key++,
                title: 'About Us',
                drawerIcon: () => <Icon type="AntDesign" name="infocirlce" style={{ fontSize: convertHeight(24), color: COLORS.SIDEBAR }} />,
                name: MODULE_ROUTE_KEYS.USER,
                params: {
                    screen: USER_ROUTE_KEYS.ABOUTUS
                }
            },
            {
                key: key++,
                title: 'Logout',
                drawerIcon: () => <Icon type="Entypo" name="log-out" style={{ fontSize: convertHeight(25), color: COLORS.SIDEBAR }} />,
                onPress: props.logout
            },
        ]
    });

    const onItemSelect = (route) => {
        if (route.name) {
            props.navigation.navigate(route.name, { ...route.params });
            props.navigation.closeDrawer();
        } else {
            route.onPress();
        }

        // const selectedRoute = routes()[index.row];
        // if (selectedRoute.name) {
        //     props.navigation.navigate(selectedRoute.name, { ...selectedRoute.params });
        //     props.navigation.closeDrawer();
        // } else if (selectedRoute.onPress) {
        //     setSelectedIndex(index);
        //     selectedRoute.onPress();
        // }
    }

    const createDrawerItemForRoute = (route) => {
        return (
            <DrawerItem
                style={{ borderBottomColor: COLORS.SIDEBAR, borderBottomWidth: 0.4 }}
                key={route.key}
                label={route.title}
                icon={route.drawerIcon}
                onPress={() => onItemSelect(route)}
            />
        );
    }

    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.headerSection}>
                <Image source={IMAGES.APP_ICON} style={{
                    height: convertHeight(120),
                    width: convertWidth(200)
                }}/>
            </View>
            <Content>
                {routes().map(createDrawerItemForRoute)}
            </Content>
        </DrawerContentScrollView>

    );
}

const styles = StyleSheet.create({
    headerSection: {
        backgroundColor: '#E0E0E0',
        height: convertHeight(200),
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default SideBarView;