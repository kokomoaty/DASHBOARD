import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import DashBoard from "./pages/DashBoard";
import { useContext, useEffect } from "react";
import { userContext } from "./context/UserContext";
import LogIn from "./pages/LogIn";
import Users from "./pages/Users";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
function App() {
  const { token } = useContext(userContext);
  return (
    <div className="App">
      {!token ? <LogIn /> : <RouterProvider router={router} />}
    </div>
  );
}

export default App;
