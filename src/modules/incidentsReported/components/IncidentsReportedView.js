import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { components, utils } from '../../../common';

const { Container, Button } = components;
const { dimensionUtils: { convertWidth, convertHeight } } = utils;

const IncidentsReportedView = (props) => {

    const { galleryNaviagte, memoNavigate, incidentsList: { data, refreshing }, loadIncidents } = props;

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            loadIncidents();
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
            <View key={item.id} style={[styles.viewStyle, styles.androidShadow, styles.iOSShadow]}>
                <View style={{ flexDirection: 'row', flex: 1 }}>
                    <Image style={{
                        height: 170,
                        width: 160,
                        borderRadius: 5
                    }} source={{ uri: `http://172.104.61.150/edge_eye_images/incident-images/${item.image}` }} />
                    <View style={{ paddingLeft: 5, flex: 1, marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>{item.type}</Text>
                        <Text>{item.camera.ward}</Text>
                        <Text style={{ marginTop: 5 }}>{item.camera.name}</Text>
                        <Text></Text>
                        <Text>{item.datetime}</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1, marginTop: 10 }}>
                            <Button bordered onPress={memoNavigate} style={{
                                width: 80, justifyContent: 'center', alignItems: 'center',
                                borderRadius: 5
                            }}>
                                <Text>Memo</Text>
                            </Button>
                            <Button bordered onPress={() => { galleryNaviagte(item.images) }}
                                style={{
                                    width: 80, marginLeft: 10, justifyContent: 'center', alignItems: 'center',
                                    borderRadius: 5
                                }}>
                                <Text>Gallery</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <Container>
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={(item) => renderItem(item)}
                    onRefresh={() => loadIncidents()}
                    refreshing={refreshing}
                    ListEmptyComponent={emptyList}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        borderRadius: convertWidth(5),
        backgroundColor: '#fff',
        paddingHorizontal: convertWidth(7),
        paddingVertical: convertHeight(7),
        margin: 7
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
    emptyList: {
        alignItems: 'center',
        paddingTop: 10
    },
});

export default IncidentsReportedView;