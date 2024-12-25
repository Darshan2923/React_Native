import { View, TextInput, StyleSheet, Alert } from "react-native"
import PrimaryButton from "../components/PrimaryButton"
import { useState } from "react";

const StartGameScreen = ({ onPickNumber }) => {

    const [enteredNumber, setEnteredNumber] = useState('');

    const numberInputHandler = (inputText) => {
        setEnteredNumber(inputText);
    }

    const resetInputHandler = () => {
        setEnteredNumber('');
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid number!", "Number has to be a number between 1 and 99", [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }

        onPickNumber(chosenNumber);

    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} value={enteredNumber} onChangeText={numberInputHandler} />
            <View style={styles.buttonsContainer}>
                <View style={styles.indiButton}>

                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.indiButton}>

                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        marginTop: 100,
        backgroundColor: '#3b021f',
        // For Android
        elevation: 4,
        // For iOs
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
    },
    numberInput: {
        height: 60,
        fontSize: 34,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        width: 50,
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    indiButton: {
        flex: 1,
    }
})