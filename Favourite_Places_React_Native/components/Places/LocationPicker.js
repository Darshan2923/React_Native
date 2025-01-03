import { Alert, Image, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from "expo-location";
import { useEffect, useState } from "react";
import { getAddress, getMapPreview } from "../../util/location";
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";

const LocationPicker = ({ onLocationPick }) => {
    const navigation = useNavigation();
    const route = useRoute();

    const [pickedLocation, setPickedLocation] = useState();

    const isFocused = useIsFocused();

    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();


    useEffect(() => {
        if (isFocused && route.params) {

            const mapPickedLocation = route.params && { lat: route.params.pickedLat, lng: route.params.pickedLng };
            setPickedLocation(mapPickedLocation);
        }

    }, [route, isFocused]);

    useEffect(() => {
        async function handleLocation() {

            if (pickedLocation) {
                const address = await getAddress(pickedLocation.lat, pickedLocation.lng);
                onLocationPick({ ...pickedLocation, address: address });
            }
        }
        handleLocation();
    }, [pickedLocation, onLocationPick]);

    async function verifyPermissions() {
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("Insufficient Permissions!", "You need to grant location permissions to use this app!!!");
            return false;
        }
        return true;
    }

    async function getLocationHandler() {
        const hasPermission = await verifyPermissions();

        if (!hasPermission) {
            return;
        }

        const location = await getCurrentPositionAsync();
        // console.log(location);
        const newLocation = {
            lat: location.coords.latitude,
            lng: location.coords.longitude,
        };
        setPickedLocation(newLocation);

        console.log(getMapPreview(newLocation.lat, newLocation.lng)); // Use the newLocation object.
    }



    function pickOnMapHandler() {
        navigation.navigate('MapScreen');
    }

    let locationPreview = <Text>No location picked yet.</Text>

    if (pickedLocation) {
        locationPreview = (
            <Image style={styles.image} source={{
                uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
            }}
            />
        );
    }

    return (
        <View>
            <View style={styles.mapPreview}>
                {locationPreview}
            </View>
            <View style={styles.actions}>
                <OutlinedButton icon="location" onPress={getLocationHandler}>Locate User</OutlinedButton>
                <OutlinedButton icon="map" onPress={pickOnMapHandler}>Pick on Map</OutlinedButton>

            </View>
        </View>
    )
}

export default LocationPicker;

const styles = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: 'hidden',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 4,
    }
})