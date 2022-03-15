import React from 'react';

import { components } from '../../../common';

const { Container, Tab, Tabs, TabHeading, Icon, CustomHeader, Text } = components;

import { IncidentReported, CameraDetailsList } from '../containers';

const TopTabBarIRView = (props) => {
    return (
        <Container>
            <CustomHeader title={'Report'} />
            <Tabs>
                <Tab heading={<TabHeading><Text style={{
                    fontWeight: 'bold',
                    color: '#FFF'
                }}>Cameras</Text></TabHeading>}>
                    <IncidentReported {...props} />
                </Tab>
                <Tab heading={<TabHeading><Text style={{
                    fontWeight: 'bold',
                    color: '#FFF'
                }}>Camera List</Text></TabHeading>}>
                    <CameraDetailsList {...props} />
                </Tab>
            </Tabs>
        </Container>
    );
}

export default TopTabBarIRView;