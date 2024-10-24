import React from "react";
import Body from "./pages/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./pages/Browse";

const App = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Body /> },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
