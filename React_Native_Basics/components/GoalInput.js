import React, { useState } from 'react';
import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    // Handle text input changes
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText); // Update state with entered text
    };

    // Add goal and clear the input field
    const addGoal = () => {
        props.onAddGoalHandler(enteredGoal); // Pass entered goal to parent
        setEnteredGoal(''); // Clear input after adding
    };

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/icon.png')} style={{ width: 100, height: 100, margin: 20 }} />
                {/* Controlled input */}
                <TextInput
                    value={enteredGoal}
                    onChangeText={goalInputHandler}
                    style={styles.textInput}
                    placeholder='Your course goal!'
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' color='#f31282' onPress={props.onCancelGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add Goal' color='#5e0acc' onPress={addGoal} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        borderWidth: 1,
        width: '100%',
        padding: 16,

    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});
