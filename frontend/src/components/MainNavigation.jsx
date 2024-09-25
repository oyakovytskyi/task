import { Form, NavLink } from "react-router-dom";

import "./MainNavigation.css";
import { useSelector } from "react-redux";

function MainNavigation() {
  const token = useSelector((state) => state.auth.token);
  return (
    <header className="header">
      <nav className="nav">
        <ul className="list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {!token && (
            <li>
              <NavLink to="login" className="login">
                Login
              </NavLink>
            </li>
          )}
          {!token && (
            <li>
              <NavLink to="signup" className="button">
                Sign Up
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <Form action="logout" method="post">
                <button className="button">Logout</button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
