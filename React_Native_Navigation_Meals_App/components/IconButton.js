import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const IconButton = ({ icon, color, onPress }) => {
    return (
        <View>
            <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
                <Ionicons name={icon} size={24} color={color} />
            </Pressable>
        </View>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7,
    },
})