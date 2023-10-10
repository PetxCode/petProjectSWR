import { createBrowserRouter } from "react-router-dom";
import LayOut from "../components/common/LayOut";
import HomeScreen from "../pages/HomeScreen";
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/Signin";
import PrivateRoute from "./PrivateRoute";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <LayOut />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);
