import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { components, utils } from '../../../common';
import IMAGES from '../../../common/icons/AssetIcons';

const { Text, InputField, ButtonField } = components;
const { dimensionUtils: { convertHeight, convertWidth } } = utils;

const LoginView = (props) => {

    const { authenticate, forgotPasswordNavigate,
        user: { login }
    } = props;

    const loginValidationSchema = yup.object().shape({
        username: yup
            .string()
            .required('Please enter username'),
        password: yup
            .string()
            .required('Please enter password')
    });

    return (
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ username: '', password: '' }}
            onSubmit={authenticate}
        >
            {({ handleChange, handleSubmit, errors, values }) => (
                <View style={styles.container}>
                    <Image source={IMAGES.APP_ICON} style={styles.appIcon} />
                    {login.showErrorLabel &&
                        <Text style={[styles.errorText, { marginTop: convertHeight(10) }]}>Invalid Username or Password</Text>}
                    <InputField
                        placeholder={'Email / Phone Number'}
                        onChangeText={handleChange('username')}
                        value={values.username}
                        errors={errors.username}
                        autoCapitalize='none'
                        iconName={'user'}
                    />
                    <Text style={styles.errorText}>{errors.username}</Text>
                    <InputField
                        placeholder={'Password'}
                        onChangeText={handleChange('password')}
                        value={values.password}
                        errors={errors.password}
                        secureTextEntry={true}
                        iconName={'lock'}
                    />
                    <Text style={styles.errorText}>{errors.password}</Text>

                    <ButtonField
                        onPress={handleSubmit}
                        onText={'Sign In'}
                        disabled={login.isAuthenticating}
                    />

                    <TouchableOpacity onPress={forgotPasswordNavigate} style={{ marginVertical: convertHeight(10) }}>
                        <Text style={styles.buttonText}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: convertWidth(30)
    },
    appIcon: {
        height: convertHeight(100),
        width: convertWidth(180),
        marginBottom: convertHeight(30)
    },
    errorText: {
        fontStyle: 'italic',
        fontSize: convertHeight(14),
        textAlign: 'justify',
        color: 'red',
        width: convertWidth(300)
    },
    buttonText: {
        fontStyle: 'italic',
        fontSize: 14,
        textAlign: 'justify'
    }
});

export default LoginView;