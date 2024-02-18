import { RouterProvider, createBrowserRouter , Outlet } from "react-router-dom";
import "./index.css";
import Main from "./layouts/Main";
import Index from "./pages/Index";
import Error from "./pages/Error";
import RestaurantMenu from "./pages/RestaurantMenu";
import { Provider } from "react-redux";
import store from "./utils/store";
import CartPage from "./pages/CartPage";
import PaymentSuccess from "./components/PaymentSuccess";
import { Toaster } from "react-hot-toast";
import UserContext from "./utils/UserContext";
import Login from "./components/Login";
import { useState } from "react";
import { useEffect } from "react";







const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Index />,
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path : "/cart",
        element : <CartPage />
      },
      
      {
        path: "/payment-success",
        element: <PaymentSuccess/>,
      },
      
      
      
    ],
  },
]);

function App() {
  
  const [userName, setUserName] = useState();

  useEffect(() => {
    let data = {
      name: "",
    };
    setUserName(data.name);
  }, []); // Empty dependency array to run the effect only once
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
        <Toaster/>
       
       
      </div>
    </Provider>
    </UserContext.Provider>
  );
}

export default App;
