import { Await, createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import { apiUrl, fetchData } from "./scripts/api";

import Root from "./pages/Root";
import BudgetPage from "./pages/BudgetPage/BudgetPage";
import ExpensesPage from "./pages/ExpensesPage/ExpensesPage";
import VisualizationPage from "./pages/VisualizationPage/VisualizationPage";
import "./App.css";

export const AppContext = createContext();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "expenses", element: <ExpensesPage /> },
      { path: "budget", element: <BudgetPage /> },
      { path: "visualization", element: <VisualizationPage /> },
    ],
  },
]);

function App() {
  const [category, setCategory] = useState([]);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchData(apiUrl, setCategory, setExpenses);
  }, []);

  return (
    <AppContext.Provider
      value={{ category, setCategory, expenses, setExpenses }}
    >
      <RouterProvider router={router} />
    </AppContext.Provider>
  );
}

export default App;
