import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import BudgetPage from "./pages/BudgetPage/BudgetPage";
import ExpensesPage from "./pages/ExpensesPage/ExpensesPage";
import VisualizationPage from "./pages/VisualizationPage/VisualizationPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {path: 'expenses', element: <ExpensesPage />},
      {path: 'budget', element: <BudgetPage />},
      {path: 'visualization', element: <VisualizationPage />}
    ]
  }
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
