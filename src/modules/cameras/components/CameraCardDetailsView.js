import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { components, utils } from '../../../common';

const { CustomHeader, Button, Content } = components;
const { dimensionUtils: { convertHeight, convertWidth } } = utils;

const CameraCardDetailsView = (props) => {
    const itemData = props.route.params.item;
    return (
        <>
            <CustomHeader title={'View Details'} />
            <Content>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.imageContainer} />
                </View>
                <View style={[styles.textRow, { marginTop: 10 }]}>
                    <Text style={{ width: convertWidth(105), fontWeight: 'bold' }}>Camera Number</Text>
                    <Text style={{ paddingHorizontal: 5 }}>:</Text>
                    <Text>{itemData.serial_no}</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={{ width: convertWidth(105), fontWeight: 'bold' }}>Camera Name</Text>
                    <Text style={{ paddingHorizontal: 5 }}>:</Text>
                    <Text>{itemData.name}</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={{ width: convertWidth(105), fontWeight: 'bold' }}>Host Name</Text>
                    <Text style={{ paddingHorizontal: 5 }}>:</Text>
                    <Text>{itemData.host_name}</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={{ width: convertWidth(105), fontWeight: 'bold' }}>Ward</Text>
                    <Text style={{ paddingHorizontal: 5 }}>:</Text>
                    <Text>{itemData.ward}</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={{ width: convertWidth(105), fontWeight: 'bold' }}>Location</Text>
                    <Text style={{ paddingHorizontal: 5 }}>:</Text>
                    <Text>{itemData.location_name === null ? '' : itemData.location_name}</Text>
                </View>
                <Button style={styles.button}>
                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Update</Text>
                </Button>
            </Content>
        </>
    );
}

const styles = StyleSheet.create({
    textRow: {
        flexDirection: 'row',
        marginHorizontal: convertHeight(20),
        marginVertical: 7
    },
    imageContainer: {
        borderWidth: 1,
        height: convertHeight(300),
        width: convertWidth(330),
        marginTop: convertHeight(10)
    },
    button: {
        width: convertWidth(330), 
        margin: 15,
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 5
    }
});

export default CameraCardDetailsView;