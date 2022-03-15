import React, { useEffect, useState } from 'react';
import { Text, FlatList, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { components, utils } from '../../../common';

const { CustomHeader, CheckBox } = components;
const { dimensionUtils: { convertHeight, convertWidth } } = utils;

const CheckListView = (props) => {

    const { loadCheckListItems, loadCheckLists: { data, refreshing } } = props;

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            loadCheckListItems();
        }
    }, [isFocused]);

    const [ids, setIds] = useState([]);

    const isChecked = (itemId) => {
        const isThere = ids.includes(itemId);
        return isThere;
    };

    const toggleChecked = (itemId) => {
        setIds(ids => [...ids, itemId]);

        if (isChecked(itemId)) {
            setIds(ids.filter((id) => id !== itemId))
        } 
    };

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
                <TouchableOpacity onPress={() => toggleChecked(item.id)} style={[styles.viewContainer]}>
                    <View style={{ justifyContent: 'center', paddingLeft: 10 }}>
                        <Image style={styles.mainImage} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95h25XuWsdG1ibbzPuHmXFyrayL58ttoRZg&usqp=CAU' }} />
                    </View>
                    <View style={{ justifyContent: 'center', width: convertWidth(213), paddingLeft: 15 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ paddingLeft: 7, paddingBottom: 7 }}>{item.name}</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <CheckBox checked={isChecked(item.id)} style={styles.rightIcon}
                            onPress={() => toggleChecked(item.id)} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
            <CustomHeader title={'CheckList'} />
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                onRefresh={() => loadCheckListItems()}
                refreshing={refreshing}
                ListEmptyComponent={emptyList}
                renderItem={(item) => renderItem(item)}
                keyExtractor={(item) => item.id.toString()}
                ListFooterComponent={() => <View style={{ height: convertHeight(90) }} />}
            />
            <TouchableOpacity activeOpacity={0.8}
                style={[styles.floatingBtnStyle, { bottom: convertHeight(20) }]}>
                <Text style={styles.floatingTextStyle}>Update</Text>
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
        width: convertWidth(25),
        height: convertHeight(25)
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
        width: convertHeight(360),
        borderRadius: convertWidth(60 / 2),
        borderWidth: convertWidth(1),
        elevation: 5,
        borderColor: 'blue',
        backgroundColor: 'blue'
    },
    floatingTextStyle: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 22,
        paddingBottom: 5
    },
});

export default CheckListView;