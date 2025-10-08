import { NavLink } from "react-router-dom";
import { useBudget } from "./BudgetContext";

const linkPage = [
  { route: "/", label: "HomePage" },
  { route: "/Chi siamo", label: "Chi siamo" },
  { route: "/Prodotti", label: "Prodotti" },
];

const NavBar = () => {
  const { budgetMode, setBudgetMode } = useBudget();

  return (
    <nav>
      <ul>
        {linkPage.map((link, i) => (
          <li key={i}>
            <NavLink to={link.route}>{link.label}</NavLink>
          </li>
        ))}

        <button
          className="back-btn budget"
          onClick={() => setBudgetMode((prev) => !prev)}
        >
          {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;
