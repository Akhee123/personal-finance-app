import { AppContext } from "../../../App";
import { useContext } from "react";

function AddExpense() {
  const context = useContext(AppContext);

  function submitHandler(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());
    context.setExpenses((prevState) => {
      return [...prevState, formObj];
    });
  }

  return (
    <>
      <h1>Add AddExpense</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="item">Item</label>
        <input type="text" name="item" />

        <label htmlFor="date">Date</label>
        <input type="date" name="date" />

        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" />

        <label htmlFor="category">Category</label>
        <select name="category" id="category">
          {context.category.map((element, index) => {
            return (
              <option key={index} value={element.category}>
                {element.category}
              </option>
            );
          })}
        </select>

        <button type="submit">Add Expense</button>
      </form>
    </>
  );
}

export default AddExpense;
