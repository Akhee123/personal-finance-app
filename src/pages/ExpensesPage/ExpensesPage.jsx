import AddExpense from "../../components/Expenses/AddExpense/AddExpense";
import ExpenseList from "../../components/Expenses/ExpenseList/ExpenseList";
import FilterExpense from "../../components/Expenses/FilterExpense/FilterExpense";

import "./ExpensesPage.css";

function ExpensesPage() {
  return (
    <>
      <h1>Expenses Page</h1>
      <div className="expenses-page">
        <div>
          <ExpenseList />
        </div>
        <div>
          <AddExpense />
        </div>
      </div>
    </>
  );
}

export default ExpensesPage;
