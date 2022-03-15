import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { components, utils } from '../../../common';
import COLORS from '../../../common/constants/colorConst';

const { CustomHeader, Container, Button, Label } = components;
const { dimensionUtils: { convertWidth, convertHeight } } = utils;

const ProfileView = (props) => {

    const { info } = props.user;

    return (
        <Container>
            <CustomHeader title={'Profile'} />
            <View style={{ height: convertHeight(100), alignItems: 'center', marginTop: convertHeight(10) }}>
                <View style={styles.circle} />
                <Text style={{ paddingTop: convertHeight(7), fontWeight: 'bold' }}>{info.account_id === null ? 'N/A' : info.account_id}</Text>
                <Text style={{ fontWeight: 'bold' }}>{info.name}</Text>
            </View>
            <View style={{ marginHorizontal: convertWidth(20), marginTop: convertHeight(50) }}>
                <Label style={{ fontWeight: 'bold' }}>Email</Label>
                <View style={{ marginLeft: 7 }}>
                    <Text>{info.email === null ? 'N/A' : info.email}</Text>
                </View>

                <Label style={styles.labelItem}>Phone Number</Label>
                <View style={{ marginLeft: 7 }}>
                    <Text>{info.phone === null ? 'N/A' : info.phone}</Text>
                </View>

                <Label style={styles.labelItem}>Gender</Label>
                <View style={{ marginLeft: 7 }}>
                    <Text>{info.gender === null ? 'N/A' : info.gender}</Text>
                </View>

                <Label style={styles.labelItem}>Date Of Birth</Label>
                <View style={{ marginLeft: 7 }}>
                    <Text>{info.dob === "" ? 'N/A' : info.dob}</Text>
                </View>

                <Button style={styles.buttonContainer} onPress={() => props.editProfileNavigate(info)}>
                    <Text style={{ fontWeight: 'bold', color: '#FFFFFF' }}>Update Profile</Text>
                </Button>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    circle: {
        width: convertWidth(80),
        height: convertWidth(80),
        borderRadius: convertWidth(80) / 2,
        backgroundColor: COLORS.SIDEBAR
    },
    buttonContainer: {
        width: convertWidth(320),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 20
    },
    labelItem: { 
        fontWeight: 'bold', 
        marginTop: 10 
    }
})

export default ProfileView;