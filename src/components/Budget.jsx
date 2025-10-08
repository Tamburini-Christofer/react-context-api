import { createContext, useState, useContext } from "react";

// Creiamo il contesto
const Budget = createContext();

// Creiamo il Provider
export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(false);

  return (
    <Budget.Provider value={{ budget, setBudget }}>
      {children}
    </Budget.Provider>
  );
};

// Custom hook per usare facilmente il contesto
export const useBudget = () => useContext(Budget);
