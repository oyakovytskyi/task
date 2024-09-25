import { logout } from "../store/authSlice";
import { redirect } from "react-router-dom";

export const action = () => {
  return async (dispatch) => {
    localStorage.removeItem("token");

    dispatch(logout());

    return redirect("/");
  };
};
