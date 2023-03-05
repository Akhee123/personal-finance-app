import { createContext, useState } from "react";
import AddExpense from "../../components/Expenses/AddExpense/AddExpense";
import ExpenseList from "../../components/Expenses/ExpenseList/ExpenseList";
import FilterExpense from "../../components/Expenses/FilterExpense/FilterExpense";

export const ExpenseContext = createContext();

function ExpensesPage() {
  const [expenses, setExpenses] = useState([]);
    return (
      <>
        <div>Expenses Page</div>
        <ExpenseContext.Provider value={{expenses, setExpenses}}>
          <AddExpense />
          <ExpenseList />
          <FilterExpense />
        </ExpenseContext.Provider>
      </>
    );
  }
  
  export default ExpensesPage;