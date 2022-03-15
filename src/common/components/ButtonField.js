import React from 'react';
import { StyleSheet, Text, ActivityIndicator } from 'react-native';
import { Button } from 'native-base';

import { dimensionUtils } from '../utils';
import COLORS from '../constants/colorConst';

const { convertWidth, convertHeight } = dimensionUtils;

const ButtonField = ({ onText, onPress, disabled }) => {
    return (
        <Button
            full large
            style={styles.btnContainer}
            onPress={onPress}
            disabled={disabled}>
            {disabled ?
                <ActivityIndicator size='small' color={COLORS.BUTTONTEXT} /> :
                <Text style={styles.buttonText}>{onText}</Text>}
        </Button>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: convertWidth(5),
        height: convertHeight(50),
        marginTop: convertHeight(10)
    },
    buttonText: {
        fontWeight: 'bold',
        color: COLORS.BUTTONTEXT
    },
});

export default ButtonField;