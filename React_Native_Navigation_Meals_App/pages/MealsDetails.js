import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import { MEALS } from "../data/dummy-data"
import MealDetailsItem from "../components/MealDetailsItem";
import SubtitleItem from "../components/SubtitleItem";
import ListItems from "../components/ListItems";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourites";
// import { FavouritesContext } from "../store/context/favourites-context";


const MealsDetails = ({ route, navigation }) => {

    // const favouriteMealsCtx = useContext(FavouritesContext);

    const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);

    const dispatch = useDispatch();

    const mealId = route.params.mealId

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    // const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);
    const mealIsFavourite = favouriteMealIds.includes(mealId);

    function changeFavouriteStatusHandler() {
        if (mealIsFavourite) {
            // favouriteMealsCtx.removeFavourite(mealId);
            dispatch(removeFavourite({ id: mealId }));
        } else {
            // favouriteMealsCtx.addFavourite(mealId);
            dispatch(addFavourite({ id: mealId }));
        }

    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={mealIsFavourite ? "star" : "star-outline"} color="white" onPress={changeFavouriteStatusHandler} />
            }
        })
    }, [navigation, changeFavouriteStatusHandler]);

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
        marginBottom: 150
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