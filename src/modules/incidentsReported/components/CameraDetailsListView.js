import React, { useEffect } from 'react';
import { FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { utils } from '../../../common';

const { dimensionUtils: { convertHeight, convertWidth } } = utils;

const CameraDetailsListView = (props) => {

    const { loadIncidentsData, incidentsListData: { data, refreshing } } = props;

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            loadIncidentsData();
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
                <TouchableOpacity style={[styles.viewContainer]}>
                    <View style={{ justifyContent: 'center', paddingLeft: 10 }}>
                        <Image source={{ uri: item.uri }} style={styles.circle} />
                    </View>
                    <View style={{ justifyContent: 'center', paddingLeft: 15 }}>
                        <Text>{item.host_name}</Text>
                        <Text>{item.name}</Text>
                        <Text>Incidents Count: <Text style={{ fontWeight: 'bold' }}>{item.incident_count.new}</Text></Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={(item) => renderItem(item)}
                onRefresh={() => loadIncidentsData()}
                refreshing={refreshing}
                ListEmptyComponent={emptyList}
                keyExtractor={(item, index) => item.id.toString()}
            />
        </View>
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
        height: convertHeight(90),
        flexDirection: 'row',
    },
    circle: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: '#E9E9E9'
    },
    circle2: {
        width: 40,
        height: 40,
        backgroundColor: 'red'
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
    },
});

export default CameraDetailsListView;