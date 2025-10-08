import { createContext, useState, useContext } from "react";

// Creiamo il contesto
const BudgetContext = createContext();

// Creiamo il Provider
export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(false);

  return (
    <BudgetContext.Provider value={{ budget, setBudget }}>
      {children}
    </BudgetContext.Provider>
  );
};

// Custom hook per usare facilmente il contesto
export const useBudget = () => useContext(BudgetContext);
