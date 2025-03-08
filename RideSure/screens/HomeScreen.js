import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { GOOGLE_MAPS_APIKEY } from '@env'

const HomeScreen = () => {

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
                        console.log(data, details);
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                    }}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})