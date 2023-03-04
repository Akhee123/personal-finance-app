import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/expenses">Expenses</NavLink>
            </li>
            <li>
              <NavLink to="/budget">Budget</NavLink>
            </li>
            <li>
              <NavLink to="/visualization">Visualization</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNav;
