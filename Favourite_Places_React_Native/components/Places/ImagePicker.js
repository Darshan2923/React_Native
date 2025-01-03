import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker";
import { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

const ImagePicker = ({ onImageTaken }) => {

    const [pickedImage, setPickedImage] = useState();

    // For ios
    // const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

    // For ios
    // async function verifyPermissions() {
    //     if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
    //         const permissionResponse = await requestPermission();

    //         return permissionResponse.granted;
    //     }

    //     if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
    //         Alert.alert('Insufficient Permissions!', 'You need to grant camera permissions to use this app!!');
    //         return false;
    //     };
    //     return true;
    // }

    async function takeImageHandler() {
        // for ios
        // const hasPermission = await verifyPermissions();

        // if (!hasPermission) {
        //     return;
        // }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
        });

        if (!image.canceled && image.assets && image.assets.length > 0) {
            const pickedImageUri = image.assets[0].uri; // Extract URI from the first asset
            setPickedImage(pickedImageUri);
            onImageTaken(pickedImageUri);
            // console.log(pickedImageUri); // Log the correct image URI
        }

        // if (image) { // Ensure the user actually took an image
        //     setPickedImage(image.uri);
        // }
        // console.log(image.assets[0].uri); // Log the image URI directly instead of relying on state
    }


    let imagePreview = <Text>No image taken yet.</Text>

    if (pickedImage) {
        imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />
    }

    return (
        <View>
            <View style={styles.imagePreview}>
                {imagePreview}
            </View>
            <OutlinedButton onPress={takeImageHandler} icon="camera">Take image</OutlinedButton>
        </View>
    )
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 4,
    }
})