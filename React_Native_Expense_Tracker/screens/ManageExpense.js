import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native"
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";


const ManageExpense = ({ route, navigation }) => {

    const expenseCtx = useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId;

    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Editing Expense' : 'Add Expense'
        })

    }, [navigation, isEditing]);

    function deleteExpenseHandler() {
        expenseCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        if (isEditing) {
            expenseCtx.updateExpense(editedExpenseId, { description: 'Text!!!', amount: 29.99, date: new Date('2024-12-27') });
        } else {
            expenseCtx.addExpense({ description: 'Text', amount: 19.99, date: new Date('2024-12-24') });
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
            {isEditing
                &&
                (
                    <View style={styles.deleteContainer}>
                        <IconButton
                            icon="trash"
                            color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
                    </View>



                )}
        </View>
    )
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
    },
})