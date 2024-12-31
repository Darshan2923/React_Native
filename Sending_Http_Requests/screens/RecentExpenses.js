import { useContext, useEffect, useState } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';
import { fetchExpenses } from '../util/http';

function RecentExpenses() {
    const expensesCtx = useContext(ExpensesContext);
    // Will not work as state will not update even if we add, any new data... We can do is do the shit with context only so that we work online and offline simultaneously and reduce calls...
    //See context.js
    // const [fetchedExpenses, setFetchedExpenses] = useState([]);

    useEffect(() => {
        async function getExpenses() {
            const expenses = await fetchExpenses();
            // setFetchedExpenses(expenses);
            expensesCtx.setExpenses(expenses);
        }
        getExpenses();
    }, []);

    // const recentExpenses = fetchExpenses.filter((expense) => {
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date >= date7DaysAgo && expense.date <= today;
    });

    return (
        <ExpensesOutput
            expenses={recentExpenses}
            expensesPeriod="Last 7 Days"
            fallbackText="No expenses registered for the last 7 days."
        />
    );
}

export default RecentExpenses;