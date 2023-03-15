import { useContext } from "react";
import { AppContext } from "../../../App";
import Budget from "../Budget/Budget"

import './BudgetList.css';

function BudgetList() {

    const context = useContext(AppContext);

    return (
        <div className="budget-list">
        <h1>Budget List</h1>
            {context.category.map((element, index) => {
                return (
                    <Budget
                        key={index}
                        id={element.id}
                        amount={element.amount}
                        category={element.category}
                    />
                )
            })}
        </div>
    );
}



export default BudgetList;
