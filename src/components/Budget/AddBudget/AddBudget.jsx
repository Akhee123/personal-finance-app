
import { useContext } from "react";
import { AppContext } from "../../../App";

function AddBudget() {

    const context = useContext(AppContext);

    function submitHandler(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const formObj = Object.fromEntries(formData.entries());
        context.setCategory(prevState => {
            return [...prevState, formObj];
        });
    }

    return (
        <>
            <h1>Add Budget</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="category">Category</label>
                <input type="text" name="category" />

                <label htmlFor="budget">Budget</label>
                <input type="number" name="budget" />

                <button type="submit">Add Budget</button>

            </form>
        </>
    );
}

export default AddBudget;