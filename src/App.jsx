import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, createContext } from "react";

import Root from "./pages/Root";
import BudgetPage from "./pages/BudgetPage/BudgetPage";
import ExpensesPage from "./pages/ExpensesPage/ExpensesPage";
import VisualizationPage from "./pages/VisualizationPage/VisualizationPage";

export const AppContext = createContext();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: 'expenses', element: <ExpensesPage /> },
      { path: 'budget', element: <BudgetPage /> },
      { path: 'visualization', element: <VisualizationPage /> }
    ]
  }
]);

function App() {

  const [category, setCategory] = useState([]);
  const [expenses, setExpenses] = useState([]);
  return (
    <AppContext.Provider value={{category, setCategory, expenses, setExpenses}}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}

export default App;
