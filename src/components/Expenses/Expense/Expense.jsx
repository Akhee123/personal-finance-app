import './Expense.css'

function Expense(props) {
  return (
    <div className='expense-card'>
      <div className="expense-details">
        <h4>{props.item}</h4>
        <h4>{props.date}</h4>
        <h4>{props.category}</h4>
      </div>
      <div className="expense-amount">
        <h1>{props.amount}</h1>
      </div>
    </div>
  );
}

export default Expense;
