import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealDetailsItem from "../components/MealDetailsItem";
import SubtitleItem from "../components/SubtitleItem";
import ListItems from "../components/ListItems";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";


const MealsDetails = ({ route, navigation }) => {

    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log('Pressed!');

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={headerButtonPressHandler} />
            }
        })
    }, [navigation, headerButtonPressHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetailsItem duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} textStyle={styles.detailText} />

            <View style={styles.listOuterConatiner}>
                <View style={styles.listContainer}>
                    <SubtitleItem>Ingredients</SubtitleItem>
                    <ListItems data={selectedMeal.ingredients} />

                    <SubtitleItem>Steps</SubtitleItem>
                    <ListItems data={selectedMeal.steps} />
                </View>
            </View>


        </ScrollView>
    )
}

export default MealsDetails;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listContainer: {
        width: '80%'
    },
    listOuterConatiner: {
        alignItems: 'center',
    }


})