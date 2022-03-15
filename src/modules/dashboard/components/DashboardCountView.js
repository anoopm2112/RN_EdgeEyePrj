import React, { useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import _ from 'lodash';

import { components, utils } from '../../../common';

const { CustomHeader, Card, Container, Text } = components;
const { dimensionUtils: { convertHeight } } = utils;

const DashboardCountView = (props) => {

    const { cameraCountsDashboard, dashBoardCountList: { data, refreshing } } = props;

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            cameraCountsDashboard();
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
        return Object.entries(_.omit(item, ['success', 'role'])).map(([key, value]) => (
            <Card key={key} shadow style={styles.card}>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Text style={{ fontSize: convertHeight(15) }}>{key}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: convertHeight(35), paddingTop: convertHeight(7) }}>{value}</Text>
                </View>
            </Card>
        ))
    };

    return (
        <Container>
            <CustomHeader title={'Count'} />
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    onRefresh={() => cameraCountsDashboard()}
                    refreshing={refreshing}
                    ListEmptyComponent={emptyList}
                    renderItem={(item) => renderItem(item)}
                    keyExtractor={(item) => Object.keys(item).toString()}
                    ListFooterComponent={() => <View style={{ height: convertHeight(60) }} />}
                />
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: convertHeight(8),
        height: convertHeight(160),
        backgroundColor: '#FFF9F3'
    },
    emptyList: {
        alignItems: 'center',
        paddingTop: 10
    },
});

export default DashboardCountView;