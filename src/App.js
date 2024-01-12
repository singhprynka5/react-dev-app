import React, { Suspense, lazy, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
import RestaurantMenu from "./components/RestaurantMenu";
const Grocery = lazy(()=>import("./components/Grocery"));
import UserContext from "./utils/UserContext";

const AppLayout = () => {
  const [userName, setUserName ] = useState("");

  useEffect(()=> {
    const data = {
      name: "Priyanka Singh"
    }
    setUserName(data.name);
  },[])

    return (
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
      </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);