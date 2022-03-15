import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

// import IMAGES from '../../../common/icons/AssetIcons';

const SplashView = () => {

    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* <Image source={IMAGES.APP_ICON} /> */}
        </View>
    );
}

export default SplashView;