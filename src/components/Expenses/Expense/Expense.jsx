import "./Expense.css";
import { deleteData, fetchData, apiUrl } from "../../../scripts/api";
import { AppContext } from "../../../App";
import { useContext } from "react";

function Expense(props) {
  const context = useContext(AppContext);

  function deleteHandler() {
    deleteData(apiUrl + props.categoryId + "/expenses/", props.id).then(() => {
      fetchData(apiUrl, context.setCategory, context.setExpenses);
    });
  }

  return (
    <div className="expense-card">
      <div className="expense-details">
        <h4>{props.item}</h4>
        <h4>{props.date}</h4>
        <h4>{props.category}</h4>
      </div>
      <div className="expense-amount">
        <h1>{props.amount}</h1>
      </div>
      <button type="button" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
}

export default Expense;
