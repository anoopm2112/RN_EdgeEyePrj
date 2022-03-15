import React from 'react';
import { StyleSheet, Text } from 'react-native';
import * as yup from 'yup';
import { Formik } from 'formik';

import { components, utils } from '../../../common';

const { CustomHeader, Input, Item, Container, Content, Button, Label } = components;
const { dimensionUtils: { convertWidth, convertHeight } } = utils;

const ChangePasswordView = (props) => {

    const { changePassword } = props;

    const changePasswordValidationSchema = yup.object().shape({
        old_password: yup
            .string()
            .required('Please enter current password'),
        password: yup
            .string()
            .required('Please enter New password'),
        password_repeat: yup
            .string()
            .required('Please confirm your password'),
    });

    return (
        <Formik
            validationSchema={changePasswordValidationSchema}
            initialValues={{ old_password: '', password: '', password_repeat: '' }}
            onSubmit={changePassword}
        >
            {({ handleChange, handleSubmit, errors, values }) => {
                return (
                    <Container>
                        <CustomHeader title={'Change Password'} />
                        <Content style={{ margin: 10 }}>
                            <Item stackedLabel>
                                <Label>Current Password</Label>
                                <Input
                                    onChangeText={handleChange('old_password')}
                                    value={values.old_password}
                                />
                            </Item>
                            <Text style={styles.errorText}>{errors.old_password}</Text>

                            <Item stackedLabel style={{ paddingTop: 7 }}>
                                <Label>New Password</Label>
                                <Input
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                />
                            </Item>
                            <Text style={styles.errorText}>{errors.password}</Text>

                            <Item stackedLabel style={{ paddingTop: 7 }}>
                                <Label>Confirm Password</Label>
                                <Input
                                    onChangeText={handleChange('password_repeat')}
                                    value={values.password_repeat}
                                />
                            </Item>
                            <Text style={styles.errorText}>{errors.password_repeat}</Text>

                            <Button onPress={handleSubmit} style={styles.btnContainer}>
                                <Text style={{ fontWeight: 'bold', color: '#FFFFFF' }}>Submit</Text>
                            </Button>
                        </Content>
                    </Container>
                )
            }}
        </Formik>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: convertWidth(340),
        borderRadius: convertWidth(5)
    },
    appIcon: {
        height: convertHeight(100),
        width: convertWidth(180)
    },
    errorText: {
        fontStyle: 'italic',
        fontSize: 12,
        textAlign: 'justify',
        color: 'red'
    }
});

export default ChangePasswordView;