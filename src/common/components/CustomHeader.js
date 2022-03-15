import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Text } from 'react-native';
import { Header, Left, Body, Right, Title } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { navigation } from '../actions';
const { navigateBack } = navigation;

const CustomHeader = ({navigateBack, title}) => {

    const BackIcon = () => (
        <TouchableOpacity onPress={navigateBack}>
            <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
    );

    return (
        <Header>
            <Left>
                {BackIcon()}
            </Left>
            <Body>
                <Title>{title}</Title>
            </Body>
            <Right></Right>
        </Header>
    );
}

const mapDispatchToProps = dispatch => ({
    navigateBack: () => dispatch(navigateBack())
});

export default connect(null, mapDispatchToProps)(CustomHeader);