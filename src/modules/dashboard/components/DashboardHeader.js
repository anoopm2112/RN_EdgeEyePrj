import React from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Left, Body, Title, Right } from 'native-base';

import { DrawerActions } from '@react-navigation/native';
import { components, utils } from '../../../common';

const { Header } = components;

const openDrawer = (toggleDrawer) => {
    return (
        <TouchableOpacity onPress={toggleDrawer}>
            <MaterialIcons name="menu" size={24} color="#FFFFFF" />
        </TouchableOpacity>
    );
};

const DashboardHeader = ({ title, toggleDrawer }) => {
    return (
        <Header >
            <Left>
                {openDrawer(toggleDrawer)}
            </Left>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right />
        </Header>
    );
};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleDrawer: () => ownProps.navigation.dispatch(DrawerActions.toggleDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);