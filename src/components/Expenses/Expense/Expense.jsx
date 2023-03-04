
function Expense() {
    
    return (
        <>
            <h1>Add Expense</h1>
            <form>
                <label htmlFor="item">Item</label>
                <input type="text" />

                <label htmlFor="date">Date</label>
                <input type="date" />

                <label htmlFor="amount">Amount</label>
                <input type="number" />

                <label htmlFor="category">Category</label>
                <input type="" />

            </form>
        </>
    );
}

export default Expense;
