import AddBudget from "../../components/Budget/AddBudget/AddBudget";
import BudgetList from "../../components/Budget/BudgetList/BudgetList";

import './BudgetPage.css'

function BudgetPage() {
  return (
    <>
      <h1>Budget Page</h1>
      <div className="budget-page">
        <BudgetList />
        <AddBudget />
      </div>
    </>
  );
}

export default BudgetPage;
