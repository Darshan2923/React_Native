import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput"
import { useContext } from "react"
import { ExpensesContext } from "../store/expenses-context"

const AllExpenses = () => {

    const expenseCtx = useContext(ExpensesContext);
    if (!expenseCtx) {
        console.error("ExpensesContext is not provided!");
        return <Text style={{ color: 'red' }}>Error: Context not found!</Text>;
    }

    return (
        <ExpensesOutput expenses={expenseCtx.expenses} expensesPeriod='Total' fallBackText="No registered expenses found!!!" />
    )
}

export default AllExpenses