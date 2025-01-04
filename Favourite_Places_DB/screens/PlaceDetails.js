import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constants/Colors";
import { useEffect, useState } from "react";
import { fetchPlaceDetails } from "../util/database";

const PlaceDetails = ({ route, navigation }) => {

    const [fetchedPlace, setFetchedPlace] = useState();

    const selectedPlaceId = route.params.placeId;

    function showOnMapHandler() {
        navigation.navigate('Map', {
            initialLat: fetchedPlace.location.lat,
            initialLng: fetchedPlace.location.lng,
        });
    }

    useEffect(() => {
        // use selectedPlaceId to fetch data for a single place
        async function loadPlaceData() {
            const place = await fetchPlaceDetails(selectedPlaceId);
            setFetchedPlace(place);
            navigation.setOptions({
                title: place.title,
            });
        }
        loadPlaceData();

    }, [selectedPlaceId]);

    if (!fetchedPlace) {
        return <View style={styles.fallBack}>
            <Text>Loading place Data...</Text>
        </View>
    }

    return (
        <ScrollView>
            <Image source={{ uri: fetchedPlace.imageUri }} style={styles.image} />
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>{fetchedPlace.address}</Text>
                </View>
                <OutlinedButton icon="map" onPress={showOnMapHandler}>
                    View on Map
                </OutlinedButton>
            </View>
        </ScrollView>
    )
}

export default PlaceDetails;

const styles = StyleSheet.create({
    fallBack: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: '35%',
        minHeight: 300,
        width: '100%',
    },
    locationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addressContainer: {
        padding: 20,
    },
    address: {
        color: Colors.primary500,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },

})