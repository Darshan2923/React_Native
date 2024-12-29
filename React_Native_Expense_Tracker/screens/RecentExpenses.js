import { Text, View } from "react-native"
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { useContext } from "react"
import { ExpensesContext } from "../store/expenses-context"
import { getDateMinusDays } from "../utils/date"

const RecentExpenses = () => {

    const expenseCtx = useContext(ExpensesContext);
    if (!expenseCtx) {
        console.error("ExpensesContext is not provided!");
        return <Text style={{ color: 'red' }}>Error: Context not found!</Text>;
    }

    const recentExpenses = expenseCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7daysAgo = getDateMinusDays(today, 7);

        return (expense.date >= date7daysAgo) && (expense.date <= today);
    });

    return (
        <ExpensesOutput expenses={recentExpenses} expensesPeriod="Last 7 days" fallBackText="No expenses registered for last 7 days!!!" />
    )
}

export default RecentExpenses