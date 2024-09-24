import { Form, NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : undefined)}
              end
            >
              Home
            </NavLink>
          </li>

          <li>
            <Form action="/logout" method="post">
              <button>Logout</button>
            </Form>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
