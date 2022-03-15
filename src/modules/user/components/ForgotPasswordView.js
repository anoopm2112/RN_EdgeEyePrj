import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { components, utils } from '../../../common';

const { Label, ButtonField, InputField } = components;
const { dimensionUtils: { convertHeight, convertWidth } } = utils;

const ForgotPasswordView = (props) => {
    const { sentOTP } = props;

    const forgotPasswordValidationSchema = yup.object().shape({
        username: yup
            .string()
            .required('Please enter Email/Phone Number'),
    });

    return (
        <Formik
            validationSchema={forgotPasswordValidationSchema}
            initialValues={{ username: '' }}
            onSubmit={sentOTP}>
            {({ handleChange, handleSubmit, errors, values }) => (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
                    <Label style={styles.forgotLabel}>Forgot Password</Label>

                    <InputField
                        placeholder={'Email / Phone Number'}
                        onChangeText={handleChange('username')}
                        value={values.username}
                        errors={errors.username}
                    />
                    <Text style={styles.errorText}>{errors.username}</Text>

                    <ButtonField
                        onPress={handleSubmit}
                        onText={'Sent OTP'}
                    />
                </View>
            )}
        </Formik>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: convertWidth(320),
        marginTop: convertHeight(20),
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#FFF'
    },
    forgotLabel: {
        fontWeight: 'bold',
        fontSize: convertHeight(22)
    },
    errorText: {
        fontStyle: 'italic',
        fontSize: 12,
        color: 'red',
        width: convertWidth(300)
    }
});

export default ForgotPasswordView;