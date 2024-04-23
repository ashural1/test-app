import { useEffect, useState } from "react";
import Title from "./components/Title";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      }
      {
        path: "/contect",
        element: <Create />,
      },
    ],
  },
]);
return <RouterProvider router={routers} />;
}

export default App;
