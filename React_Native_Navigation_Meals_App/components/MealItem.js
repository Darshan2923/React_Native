import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import MealDetailsItem from "./MealDetailsItem";


const MealItem = ({ id, title, imageUrl, duration, complexity, affordability }) => {

    const navigation = useNavigation();

    const selectMealHandler = () => {
        navigation.navigate('MealsDetails', {
            mealId: id
        });

    }


    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc' }} onPress={selectMealHandler}>
                <View>
                    <View style={styles.innerContainer}>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetailsItem complexity={complexity} affordability={affordability} duration={duration} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
})