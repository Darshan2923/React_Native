// import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native"
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList";


const MealsOverviewPage = ({ route }) => {

    // const route=useRoute();

    const navigation = useNavigation();

    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })



    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId)?.title;

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation]);

    return (
        <MealsList items={displayedMeals} />
    )
}

export default MealsOverviewPage;
