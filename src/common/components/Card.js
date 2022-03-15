import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { dimensionUtils } from "../../common/utils";

const { convertWidth, convertHeight } = dimensionUtils;

export default React.forwardRef((props, ref) => {
    let { shadow, style = {}, children, ...rest } = props;
    style = {
        ...styles.viewStyle,
        ...style
    };
    if (shadow) {
        style = Platform.OS === 'android' ?
            {
                ...style,
                ...styles.androidShadow,
            } :
            {
                ...style,
                ...styles.iOSShadow,
            };
    }
    return (
        <View ref={ref} style={style}>{children}</View>
    );
});

const styles = StyleSheet.create({
    viewStyle: {
        borderRadius: convertWidth(5),
        backgroundColor: '#fff',
        paddingHorizontal: convertWidth(13),
        paddingTop: convertHeight(13)
    },
    iOSShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    androidShadow: {
        elevation: 3,
    }
});
