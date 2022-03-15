import React, { useEffect } from 'react';
import { FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { components, utils } from '../../../common';
import IMAGES from '../../../common/icons/AssetIcons';

const { CustomHeader } = components;
const { dimensionUtils: { convertHeight, convertWidth } } = utils;

const CameraListView = (props) => {

    const { checkListNavigate, cameraListLoad, loadCamerasList: { data, refreshing }, cameraCardDetailsNavigate } = props;

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            cameraListLoad();
        }
    }, [isFocused]);

    const emptyList = () => (
        !refreshing ?
            <View style={styles.emptyList}>
                <Text>No_data_available</Text>
            </View>
            : <View />
    );

    const renderItem = ({ item }) => {
        return (
            <View style={[styles.androidShadow, styles.iOSShadow, styles.viewStyle]}>
                <TouchableOpacity
                    // onPress={() => { cameraCardDetailsNavigate(item) }}
                    onPress={() => props.navigation.navigate('CameraCardDetails', { item: item })}
                    style={[styles.viewContainer]}>
                    <View style={{ justifyContent: 'center', paddingLeft: 10 }}>
                        <Image style={styles.mainImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95h25XuWsdG1ibbzPuHmXFyrayL58ttoRZg&usqp=CAU' }} />
                    </View>
                    <View style={{ justifyContent: 'center', width: convertWidth(223), paddingLeft: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.circle3} />
                            <Text style={{ paddingLeft: 7, paddingBottom: 7 }}>{item.name}</Text>
                        </View>
                        <Text>{item.host_name}</Text>
                        <Text style={{ fontWeight: 'bold' }}>Last heart beat time:</Text>
                        <Text>{item.last_heart_beat_timestamp}</Text>
                    </View>
                    <View>
                        <Image source={IMAGES.ACTIVE_CAMERA_ICON} style={styles.rightIcon} />
                    </View>
                </TouchableOpacity>
            </View >
        )
    }

    return (
        <>
            <CustomHeader title={'Cameras'} />
            <FlatList
                data={data}
                onRefresh={() => cameraListLoad()}
                refreshing={refreshing}
                ListEmptyComponent={emptyList}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}
            />
            <TouchableOpacity onPress={checkListNavigate} activeOpacity={0.8}
                style={[styles.floatingBtnStyle, { bottom: convertHeight(20) }]}>
                <Text style={styles.floatingTextStyle}>+</Text>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    card: {
        alignSelf: 'stretch',
        flex: 1,
        margin: convertWidth(6),
        borderLeftWidth: convertWidth(7),
    },
    mainContainer: {
        padding: convertWidth(6),
        flex: 1
    },
    viewContainer: {
        height: convertHeight(105),
        flexDirection: 'row',
    },
    mainImage: {
        width: convertWidth(60),
        height: convertWidth(60),
        borderRadius: convertWidth(60 / 2),
    },
    rightIcon: {
        width: convertWidth(40),
        height: convertHeight(40)
    },
    circle3: {
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        backgroundColor: '#B6B6B6',
        marginTop: 3
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
    },
    viewStyle: {
        borderRadius: convertWidth(5),
        backgroundColor: '#fff',
        paddingHorizontal: convertWidth(7),
        paddingVertical: convertHeight(7),
        margin: 7
    },
    floatingBtnStyle: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingHorizontal: convertWidth(8),
        right: convertWidth(14),
        height: convertHeight(60),
        width: convertHeight(60),
        borderRadius: convertWidth(60 / 2),
        borderWidth: convertWidth(1),
        elevation: 5,
        borderColor: 'blue',
        backgroundColor: 'blue'
    },
    floatingTextStyle: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 5
    },
    emptyList: {
        alignItems: 'center',
        paddingTop: 10
    }
});

export default CameraListView;