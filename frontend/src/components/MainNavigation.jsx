import { Form, NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { useSelector } from "react-redux";

function MainNavigation() {
  const token = useSelector((state) => state.auth.token);
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {!token && (
            <li>
              <NavLink to="login">Login</NavLink>
            </li>
          )}
          {!token && (
            <li>
              <NavLink to="signup">Sign Up</NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="logout" method="post">
                <button>Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
