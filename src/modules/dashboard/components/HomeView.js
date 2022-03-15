import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import DashboardHeader from './DashboardHeader';
import { components } from '../../../common';

const { Container, Card } = components;

const HomeView = (props) => {
    const { 
        navigation, dashboardCountNavigate, incidentReportedNavigate, cameraListNavigate,
        galleryNavigate 
    } = props;
    return (
        <Container>
            <DashboardHeader title={'Home'} navigation={navigation} />
            <Card shadow style={styles.card}>
                <TouchableOpacity onPress={dashboardCountNavigate} style={styles.cardTitle}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>DASHBOARD COUNT</Text>
                </TouchableOpacity>
            </Card>
            <Card shadow style={styles.card}>
                <TouchableOpacity onPress={incidentReportedNavigate} style={styles.cardTitle}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>INCIDENTS REPORTED</Text>
                </TouchableOpacity>
            </Card>
            <Card shadow style={styles.card}>
                <TouchableOpacity onPress={cameraListNavigate} style={styles.cardTitle}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>CAMERAS</Text>
                </TouchableOpacity>
            </Card>
            <Card shadow style={styles.card}>
                <TouchableOpacity onPress={galleryNavigate} style={styles.cardTitle}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>SERVICES</Text>
                </TouchableOpacity>
            </Card>
        </Container>
    );
}

const styles = StyleSheet.create({
    card: {
        alignSelf: 'stretch',
        flex: 1,
        margin: 7,
    },
    cardTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
});

export default HomeView;