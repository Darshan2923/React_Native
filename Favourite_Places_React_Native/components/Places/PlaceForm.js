import { useCallback, useState } from "react"
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";
import { Place } from "../../models/Place";

const PlaceForm = ({ onCreatePlace }) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [takenImage, setTakenImage] = useState();
    const [pickedLocation, setPickedLocation] = useState();

    function changeTitleHandler(enteredText) {
        setEnteredTitle(enteredText);
    }

    function savePlaceHandler() {
        // console.log(enteredTitle);
        // console.log(takenImage);
        // console.log(pickedLocation);

        const placeData = new Place(
            enteredTitle,
            takenImage,
            pickedLocation,
        );

        console.log("Called in placeform: ", placeData);

        onCreatePlace(placeData);
    }

    function imagetakeHandler(imageUri) {
        setTakenImage(imageUri);
    }

    const locationPickHandler = useCallback((location) => {
        setPickedLocation(location);
    }, []);

    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.input} onChangeText={changeTitleHandler} />
            </View>
            <ImagePicker onImageTaken={imagetakeHandler} />
            <LocationPicker onLocationPick={locationPickHandler} />
            <Button onPress={savePlaceHandler}>Add Place</Button>
        </ScrollView>
    )
}

export default PlaceForm;

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500,
    },
    input: {
        marginVertical: 8,
        paddingVertical: 8,
        paddingHorizontal: 4,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100,
    },
})