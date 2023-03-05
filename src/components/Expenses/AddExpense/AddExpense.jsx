import { ExpenseContext } from "../../../pages/ExpensesPage/ExpensesPage";
import { useContext } from "react";

function AddExpense() {

    const context = useContext(ExpenseContext);
    
    function submitHandler(event){
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const formObj = Object.fromEntries(formData.entries());
        context.setExpenses( prevState => {
            return [...prevState, formObj];
        });
    }

    return (
        <>
            <h1>Add AddExpense</h1>
            <form method="post" onSubmit={submitHandler}>
                <label htmlFor="item">Item</label>
                <input type="text" name="item" />

                <label htmlFor="date">Date</label>
                <input type="date" name="date" />

                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" />

                <label htmlFor="category">Category</label>
                <input type="text" name="category" />

                <button type="submit">Add Expense</button>

            </form>
        </>
    );
}

export default AddExpense;
