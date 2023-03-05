import { useContext } from "react";
import { AppContext } from "../../../App";
import Budget from "../Budget/Budget"

function BudgetList() {

    const context = useContext(AppContext);

    return (
        <>
        <h1>Budget List</h1>
            {context.category.map((element, index) => {
                return (
                    <Budget
                        key={index}
                        budget={element.budget}
                        category={element.category}
                    />
                )
            })}
        </>
    );
}



export default BudgetList;
