import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const GoalItem = (props) => {
    return (
        // Wrap in Pressable to handle onPress events
        <View style={styles.goalItem}>
            <Pressable
                style={({ pressed }) => pressed && styles.pressedItem}
                onPress={props.onDeleteItem} android_ripple={{ color: '#dddddd' }}>
                {/* Display the goal text */}
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5
    }
});
