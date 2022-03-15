import React from 'react';
import { View, FlatList, Image, StyleSheet } from 'react-native';

import { components } from '../../../common';

const { CustomHeader } = components;

const GalleryView = (props) => {

    const { route: { params: { data = {} } } } = props;

    return (
        <>
            <CustomHeader title={'Gallery'} />
            <View style={styles.MainContainer}>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.imageContainer}>
                                <Image style={styles.imageThumbnail} source={{ uri: `http://172.104.61.150/edge_eye_images/incident-images/${item}` }} />
                            </View>
                        )
                    }}
                    numColumns={2}
                    keyExtractor={(item, index) => index}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150
    },
    imageContainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 5,
        marginTop: 6
    }
});

export default GalleryView;