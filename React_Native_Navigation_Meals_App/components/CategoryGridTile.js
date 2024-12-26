import { Platform, Pressable, StyleSheet, Text, View } from "react-native"


const CategoryGridTile = ({ title, color }) => {
    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                // style={({ pressed }) => [styles.button, pressed?styles.buttonPressed:null]}
                style={styles.button}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    // buttonPressed: {
    //     opacity: 0.5,
    // },
    button: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})