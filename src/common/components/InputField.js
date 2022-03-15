import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Item, Icon } from 'native-base';

import COLORS from '../constants/colorConst';
import { dimensionUtils } from '../utils';

const { convertWidth, convertHeight } = dimensionUtils;

const InputField = ({ placeholder, onChangeText, value, errors, secureTextEntry,
    iconName
}) => {
    const dangerLine = errors != undefined ? errors.includes(errors) : false;

    return (
        <Item error={dangerLine} style={styles.inputItemContainer}>
            <Icon type="FontAwesome" name={iconName} style={{ fontSize: convertHeight(29), color: COLORS.SIDEBAR }} />
            <Input
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}
            />
        </Item>
    );
}

const styles = StyleSheet.create({
    errorText: {
        fontStyle: 'italic',
        fontSize: 12,
        textAlign: 'justify',
        color: 'red'
    }
});

export default InputField;