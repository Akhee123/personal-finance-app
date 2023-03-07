import './Budget.css'

function Budget(props) {

    return (
        <div className='budget-card'>
            <h2>{props.budget}</h2>
            <h2>{props.category}</h2>
        </div>
    );
}

export default Budget;
