import { NavLink } from "react-router-dom";
import { useBudget } from "../components/Budget";

const linkPage = [
  { route: "/", label: "HomePage" },
  { route: "/Chi siamo", label: "Chi siamo" },
  { route: "/Prodotti", label: "Prodotti" },
];
const NavBar = () => {
  const { budget, setBudget } = useBudget();
  return (
    <>
      <nav>
        <ul>
          {linkPage.map((link) => (
            <li>
              <NavLink to={link.route}>{link.label}</NavLink>
            </li>
          ))} 
          <button
          className="back-btn budget"
          onClick={() => setBudget((prev) => !prev)}>
          {budget ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
        </button>
        </ul>
        
       
      </nav>
    </>
  );
};

export default NavBar;
