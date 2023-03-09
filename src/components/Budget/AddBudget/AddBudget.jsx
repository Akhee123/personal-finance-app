import { useContext } from "react";
import { AppContext } from "../../../App";
import { apiUrl, addData, fetchData } from "../../../scripts/api";

import './AddBudget.css';

function AddBudget() {
  const context = useContext(AppContext);

  function submitHandler(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());
    const returnObj = {...formObj, amount: Number(formObj.amount)};
    if (
        context.category.some((element) => element.category === formObj.category)
    ) {
      alert("Budget has already been entered");
    } else {
      // POST and GET
      addData(apiUrl, returnObj).then(() => {fetchData(apiUrl, context.setCategory, context.setExpenses)});
    }
  }

  return (
    <div className="add-budget">
      <h1>Add Budget</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="category">Category</label>
        <input type="text" name="category" />

        <label htmlFor="budget">Budget</label>
        <input type="number" name="amount" />

        <button type="submit">Add Budget</button>
      </form>
    </div>
  );
}

export default AddBudget;
