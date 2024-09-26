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
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="nav-home">
              Home
            </NavLink>
          </li>
          {!token && location.pathname !== "/login" && location.pathname !== "/signup" && (
            <li>
              <NavLink to="login" className="nav-login">
                Log In
              </NavLink>
            </li>
          )}
          {!token && location.pathname !== "/login" && location.pathname !== "/signup" && (
            <li>
              <NavLink to="signup" className="nav-button">
                Sign Up
              </NavLink>
            </li>
          )}
          {token && (
            <li>
              <button className="nav-button" onClick={handleLogout}>
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
