import React from 'react';
import { Icon } from 'native-base';

const CustomIcon = (props) => {
    const { width, height, name, pack } = props;
    return (
        <Icon style={{ width: width || 32, height: height || 32, alignSelf: 'center' }}
            name={name} pack={pack} />
    );
};

export default CustomIcon;