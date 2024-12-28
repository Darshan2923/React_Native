import { FlatList, StyleSheet, View } from "react-native"
import MealItem from "./MealItem";


const MealsList = ({ items }) => {

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
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

export default MealsList;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginBottom: 150
    },
})