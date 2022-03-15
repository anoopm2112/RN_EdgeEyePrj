import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import { components, utils } from '../../../common';

const { CustomHeader, Input, Item, Container, Content, Button, Label } = components;
const { dimensionUtils: { convertWidth, convertHeight } } = utils;

const MemoView = (props) => {

    const { memoCreate } = props;

    const memoValidationSchema = yup.object().shape({
        // username: yup
        //     .string()
        //     .required('Please enter username'),
        // email: yup
        //     .string()
        //     .required('Please enter valid email'),
        // address: yup
        //     .string()
        //     .required('Please enter address'),
        // subject: yup
        //     .string()
        //     .required('Please enter subject'),
        // memo_type_id: yup
        //     .string()
        //     .required('Please enter memo type'),
        // amount: yup
        //     .string()
        //     .required('Please enter amount'),
        // act_and_rule: yup
        //     .string()
        //     .required('Please enter act and rule'),
        // decription: yup
        //     .string()
        //     .required('Please enter decription'),
    });

    return (
        <Formik
            validationSchema={memoValidationSchema}
            initialValues={{
                name: '', email: '', address: '', subject: '', memo_type_id: '',
                amount: '', act_and_rule: '', description: ''
            }}
            onSubmit={memoCreate}
        >
            {({ handleChange, handleSubmit, errors, values }) => {
                console.log('Values', values);
                return (
                    <Container>
                        <CustomHeader title={'Create Memo'} />
                        <Content style={{ margin: 10 }}>
                            <Item stackedLabel>
                                <Label>Username</Label>
                                <Input
                                    onChangeText={handleChange('name')}
                                    value={values.name} />
                            </Item>
                            <Text style={styles.errorText}>{errors.name}</Text>

                            <Item stackedLabel style={{ paddingTop: 7 }}>
                                <Label>Email</Label>
                                <Input
                                    onChangeText={handleChange('email')}
                                    value={values.email} />
                            </Item>
                            <Text style={styles.errorText}>{errors.email}</Text>

                            <Item stackedLabel style={{ paddingTop: 7 }}>
                                <Label>Address</Label>
                                <Input
                                    onChangeText={handleChange('address')}
                                    value={values.address} />
                            </Item>
                            <Item stackedLabel style={{ paddingTop: 7 }}>
                                <Label>Subject</Label>
                                <Input
                                    onChangeText={handleChange('subject')}
                                    value={values.subject} />
                            </Item>
                            <Item stackedLabel style={{ paddingTop: 7 }}>
                                <Label>Memo Type</Label>
                                <Input
                                    onChangeText={handleChange('memo_type_id')}
                                    value={values.memo_type_id} />
                            </Item>
                            <Item stackedLabel style={{ paddingTop: 7 }}>
                                <Label>Amount</Label>
                                <Input
                                    onChangeText={handleChange('amount')}
                                    value={values.amount} />
                            </Item>
                            <Item stackedLabel style={{ paddingTop: 7 }}>
                                <Label>Act and rule</Label>
                                <Input
                                    onChangeText={handleChange('act_and_rule')}
                                    value={values.act_and_rule} />
                            </Item>
                            <Item stackedLabel style={{ paddingTop: 7 }}>
                                <Label>Description</Label>
                                <Input
                                    onChangeText={handleChange('description')}
                                    value={values.description} />
                            </Item>
                            <Button onPress={handleSubmit} style={styles.buttonContainer}>
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
    errorText: {
        fontStyle: 'italic',
        fontSize: 12,
        textAlign: 'justify',
        color: 'red'
    },
    buttonContainer: {
        marginTop: 10,
        width: convertWidth(340),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }
});

export default MemoView;