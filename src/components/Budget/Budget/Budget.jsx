import Popup from "reactjs-popup";
import { AppContext } from "../../../App";
import { useContext } from "react";
import {
  apiUrl,
  updateData,
  deleteData,
  fetchData,
} from "../../../scripts/api";
import "./Budget.css";

function Budget(props) {
  const context = useContext(AppContext);

  function deleteHandler() {
    deleteData(apiUrl, props.id).then(() => {
      fetchData(apiUrl, context.setCategory, context.setExpenses);
    });
  }

  function updateHandler(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());
    const returnObj = { ...formObj, amount: Number(formObj.amount) };

    // UPDATE and GET
    updateData(apiUrl, props.id, returnObj).then(() => {
      fetchData(apiUrl, context.setCategory, context.setExpenses);
    });
  }

  return (
    <div className="budget-card">
      <h2>{props.amount}</h2>
      <h2>{props.category}</h2>
      <div className="buttons">
        <Popup
          trigger={<button type="button">Update</button>}
          modal
          closeOnDocumentClick
        >
          {(close) => (
            <div className="modal">
              <h1>Add Budget</h1>
              <form onSubmit={updateHandler}>
                <label htmlFor="category">Name</label>
                <input type="text" name="category" />

                <label htmlFor="budget">Budget</label>
                <input type="number" name="amount" />

                <div className="update-buttons">
                  <button type="submit">Update Budget</button>
                  <button type="button" onClick={close}></button>
                </div>
              </form>
            </div>
          )}
        </Popup>
        <button type="button" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Budget;
