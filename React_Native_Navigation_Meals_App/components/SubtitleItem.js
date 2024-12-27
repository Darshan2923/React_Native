import { StyleSheet, Text, View } from "react-native"

const SubtitleItem = ({ children }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default SubtitleItem;

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        borderBottomColor: '#e2b497',
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomWidth: 2
    },
})