import { AppContext } from "../../../App";
import { useContext } from "react";
import { apiUrl, addData, fetchData } from "../../../scripts/api";

import "./AddExpense.css";

function AddExpense() {
  const context = useContext(AppContext);

  function submitHandler(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());
    const returnObj = { ...formObj, amount: Number(formObj.amount) };

    const categoryId = event.target[3].selectedOptions[0].id;

      // POST and GET
    addData(apiUrl + categoryId + "/expenses", returnObj).then(() => {
      fetchData(apiUrl, context.setCategory, context.setExpenses);
    });
  }

  return (
    <div className="add-expense">
      <h1>Add Expense</h1>
      <form onSubmit={submitHandler}>
        <div className="enter-item">
          <label htmlFor="item">Item</label>
          <input type="text" name="item" />
        </div>

        <div className="enter-date">
          <label htmlFor="date">Date</label>
          <input type="date" name="date" />
        </div>

        <div className="enter-amount">
          <label htmlFor="amount">Amount</label>
          <input type="number" name="amount" />
        </div>

        <div className="select-category">
          <label htmlFor="category">Category</label>
          <select name="category" id="category">
            {context.category.map((element, index) => {
              return (
                <option key={index} id={element.id} value={element.category}>
                  {element.category}
                </option>
              );
            })}
          </select>
        </div>

        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default AddExpense;
