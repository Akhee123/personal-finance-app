import AddExpense from "../../components/Expenses/AddExpense/AddExpense";
import ExpenseList from "../../components/Expenses/ExpenseList/ExpenseList";
import FilterExpense from "../../components/Expenses/FilterExpense/FilterExpense";

function ExpensesPage() {
  
    return (
      <>
        <div>Expenses Page</div>
          <AddExpense />
          <ExpenseList />
          <FilterExpense />
      </>
    );
  }
  
  export default ExpensesPage;