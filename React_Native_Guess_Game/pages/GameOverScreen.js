import { Image, StyleSheet, Text, View } from "react-native"
import Title from "../components/Title"
import Colors from "../constants/colors";

const GameOverScreen = () => {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>

                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text>
                Your phone needed <Text>X</Text> rounds to guess the number <Text>Y</Text>.
            </Text>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'

    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    }
})