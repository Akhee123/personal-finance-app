import { useContext } from "react";
import { ExpenseContext } from "../../../pages/ExpensesPage/ExpensesPage";
import Expense from "../Expense/Expense";

function ExpenseList() {

    const context = useContext(ExpenseContext);

    return (
        <>
        <h1>Expense List</h1>
            {context.expenses.map((element, index) => {
                return (
                    <Expense
                        key={index}
                        amount={element.amount}
                        item={element.item}
                        date={element.date}
                        category={element.category}
                    />
                );
            })}
        </>
    );
}

export default ExpenseList;

