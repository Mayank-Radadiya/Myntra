import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Router/App.jsx";
import "./index.css";
import Bag from "./components/Bag.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Router/Home.jsx";
import { Provider } from "react-redux";
import store from "./store";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // Updated to use createRoot
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
