import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useDispatch } from 'react-redux'
import { setDestination, setOrigin } from '../slices/navSlice'

const HomeScreen = () => {

    // useEffect(() => {
    //     const checkApi = async () => {
    //         try {
    //             const response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Delhi&key=${GOOGLE_MAPS_APIKEY}`);
    //             const data = await response.json();
    //             console.log('API is working:', data);
    //         } catch (error) {
    //             console.error('Error checking API:', error);
    //         }
    //     };

    //     checkApi();
    // }, []);

    const dispatch = useDispatch();

    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`pl-5 pr-5`}>
                <Image
                    style={{ width: 150, height: 100, resizeMode: 'contain' }}
                    source={require('../assets/logo.png')}
                />

                <GooglePlacesAutocomplete
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    placeholder="Search"
                    minLength={2}
                    fetchDetails={true}
                    onPress={(data, details = null) => {
                        // console.log(data, details);
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }));

                        dispatch(setDestination(null));
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                        components: 'country:in',
                    }}
                    nearbyPlacesAPI="places"
                    enablePoweredByContainer={false}
                    returnKeyType={'search'}
                    listViewDisplayed="auto"
                    textInputProps={{
                        clearButtonMode: 'while-editing',
                        autoCorrect: false
                    }}


                    debounce={400}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})