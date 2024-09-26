import { NavLink, useLocation, useNavigate } from "react-router-dom";

import "./MainNavigation.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";

function MainNavigation() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="list">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {!token && location.pathname !== "/login" && location.pathname !== "/signup" && (
            <li>
              <NavLink to="login" className="login">
                Log In
              </NavLink>
            </li>
          )}
          {!token && location.pathname !== "/login" && location.pathname !== "/signup" && (
            <li>
              <NavLink to="signup" className="button">
                Sign Up
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <button className="button" onClick={handleLogout}>
                Log Out
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
