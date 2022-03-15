import { PixelRatio, Dimensions } from 'react-native';

function getDimension() {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('window').height;

    if (width > height) {
        return { width: height, height: width };
    }
    return { width, height };
}

export const DESIGN_HEIGHT_WIDTH = { HEIGHT: 640, WIDTH: 360 };

export const convertHeight = height => {
    const elemHeight = typeof height === 'number' ? height : parseFloat(height);
    return PixelRatio.roundToNearestPixel(
        (getDimension().height * elemHeight) / DESIGN_HEIGHT_WIDTH.HEIGHT
    );
}

export const convertWidth = width => {
    const elemWidth = typeof width === 'number' ? width : parseFloat(width);
    return PixelRatio.roundToNearestPixel(
        (getDimension().width * elemWidth) / DESIGN_HEIGHT_WIDTH.WIDTH
    );
}