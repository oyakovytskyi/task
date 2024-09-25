import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage";
import "./styles.css";
import ErrorPage from "./pages/Error";
import RootLayout from "./components/RootLayout";
import Towers from "./pages/Towers";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { action as logoutAction } from "./pages/Logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "towers", element: <Towers /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "logout", action: logoutAction, element: null },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
