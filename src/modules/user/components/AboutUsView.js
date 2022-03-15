import React from 'react';
import { Text, View } from 'react-native';

import { components } from '../../../common';

const { CustomHeader, Container, Content } = components;

const AboutUsView = () => {
    return (
        <Container>
            <CustomHeader title={'About Us'} />
            <Content>
                <View style={{justifyContent:'center', alignItems:'center', flex: 1, marginTop: 10}}>
                    <Text>Welcome to Edge Mobile Application</Text>
                </View>
            </Content>
        </Container>
    );
}

export default AboutUsView;