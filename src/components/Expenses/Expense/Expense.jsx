
function Expense(props) {

    return (
        <>
            <h1>{props.amount}</h1>
            <h4>{props.item}</h4>
            <h4>{props.date}</h4>
            <h4>{props.category}</h4>
        </>
    );
}

export default Expense;

