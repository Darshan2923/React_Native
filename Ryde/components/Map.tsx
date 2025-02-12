import { View } from 'react-native';
import React from 'react';
import MapView, { PROVIDER_DEFAULT, Marker } from 'react-native-maps';
import { useLocationStore } from '@/store';
import { calculateRegion } from '@/lib/map';

const Map = () => {
    // const region = {
    //     latitude: 19.217958,     // Latitude of Padma Nagar, Kandivali East
    //     longitude: 72.867332,   // Longitude of Padma Nagar, Kandivali East
    //     latitudeDelta: 0.01,    // Zoom level
    //     longitudeDelta: 0.01,   // Zoom level
    // };

    const { userLongitude, userLatitude, destinationLatitude, destinationLongitude } = useLocationStore();

    const region = calculateRegion({
        userLongitude, userLatitude, destinationLatitude, destinationLongitude
    })


    return (
        <View style={{ flex: 1 }}>
            <MapView
                provider={PROVIDER_DEFAULT}
                style={{ width: '100%', height: '100%', borderRadius: 20 }}
                showsPointsOfInterest={false}
                initialRegion={region}
                mapType='mutedStandard'
                tintColor='black'
                showsUserLocation={true}
                userInterfaceStyle='light'
            >
                <Marker coordinate={region} title="Location" />
            </MapView>
        </View>
    );
}

export default Map;
