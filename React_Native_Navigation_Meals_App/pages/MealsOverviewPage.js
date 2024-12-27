// import { useRoute } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native"
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";


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



    const renderMealItem = (itemData) => {
        const item = itemData.item;

        const mealItemProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            duration: item.duration,
            complexity: item.complexity,
            id: item.id,
            affordability: item.affordability,
        }

        return <MealItem {...mealItemProps} />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsOverviewPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})