import { useContext } from "react";
import { AppContext } from "../../../App";
import Expense from "../Expense/Expense";

import './ExpenseList.css'

function ExpenseList() {

    const context = useContext(AppContext);

    return (
        <div className="expense-list">
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
        </div>
    );
}

export default ExpenseList;
