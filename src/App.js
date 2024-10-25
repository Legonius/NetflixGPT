import React from "react";
import Body from "./pages/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./pages/Browse";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Body /> },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
