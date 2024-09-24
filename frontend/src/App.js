import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage";
import "./styles.css";
import ErrorPage from "./pages/Error";
import RootLayout from "./components/RootLayout";
import Towers from "./pages/Towers";
import SignUp from "./components/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      { index: true, element: <MainPage /> },
      { path: "towers", element: <Towers /> },
      { path: "sign-up", element: <SignUp /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
