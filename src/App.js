import React from "react";
import Body from "./pages/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./pages/Browse";
import { Provider } from "react-redux";
import store from "./store";
import Search from "./pages/Search";
import HomeMainPage from "./components/HomeMainPage";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Body /> },
    {
      path: "/browse",
      element: <Browse />,
      children: [
        {
          path: "",
          element: <HomeMainPage />,
        },
        {
          path: "search",
          element: <Search />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
