import React from 'react'
import { Text, View } from 'react-native'

const GameScreen = () => {
    return (
        <View>
            <Text>Opponent's Guess</Text>
            GUESS
            <View>
                <Text>Higher or lower?</Text>
                +
                -
            </View>
            <View>ROUNDS</View>
        </View>
    )
}

export default GameScreen