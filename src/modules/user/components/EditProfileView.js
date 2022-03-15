import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import { components, utils } from '../../../common';
import COLORS from '../../../common/constants/colorConst';

const { CustomHeader, Content, Container, Item, Label, Input, Button } = components;
const { dimensionUtils: { convertHeight, convertWidth } } = utils;

const EditProfileView = (props) => {

    const { info: { name = '', phone = '', profilePic = '' } = {} } = props.user;

    return (
        <Formik
            initialValues={{ name, phone, profilePic }}
            onSubmit={props.updateEditProfile}>
            {({ handleChange, handleSubmit, errors, values }) => {
                return (
                    <Container>
                        <Content>
                            <CustomHeader title={'Edit Profile'} />
                            <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
                                <View style={styles.circle} />
                            </View>
                            <View style={{ marginHorizontal: convertHeight(20) }}>
                                <Item stackedLabel style={{ paddingTop: 7 }}>
                                    <Label>Email</Label>
                                    <Input
                                        onChangeText={handleChange('name')}
                                        value={values.name}
                                    />
                                </Item>
                                <Item stackedLabel style={{ paddingTop: 7 }}>
                                    <Label>Phone Number</Label>
                                    <Input
                                        onChangeText={handleChange('phone')}
                                        value={values.phone}
                                    />
                                </Item>
                                <Button  onPress={handleSubmit} style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>Update Profile</Text>
                                </Button>
                            </View>
                        </Content>
                    </Container>
                )
            }}
        </Formik>
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
        marginBottom: 10
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
});

export default EditProfileView;