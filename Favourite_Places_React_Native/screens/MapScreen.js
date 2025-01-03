import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps"
import IconButton from "../components/UI/IconButton";

const MapScreen = ({ navigation }) => {

    const [selectedLocation, setSelectedLocation] = useState();

    const region = {
        latitude: 19.1974022,
        longitude: 72.860074,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    function selectLocationHandler(event) {
        // console.log(event);

        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;

        setSelectedLocation({ lat: lat, lng: lng });
    }

    const savePickedLocationHandler = useCallback(() => {
        if (!selectedLocation) {
            Alert.alert("No location picked!", "You have to pick a location (by tapping on the map) first!");
            return;
        }

        navigation.navigate('AddPlace', {
            pickedLat: selectedLocation.lat,
            pickedLng: selectedLocation.lng,
        });

    }, [navigation, selectedLocation]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({ tintColor }) => <IconButton icon='save' size={24} color={tintColor} onPress={savePickedLocationHandler} />
        })
    }, [navigation, savePickedLocationHandler]);

    return (
        <MapView style={styles.screenContainer} initialRegion={region} onPress={selectLocationHandler}>
            {selectedLocation && <Marker title="Picked Location" coordinate={{ latitude: selectedLocation.lat, longitude: selectedLocation.lng }} />}
        </MapView>
    )
}

export default MapScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    }
})