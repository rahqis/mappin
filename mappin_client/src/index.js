import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Form from "./components/signup";
import Login from "./components/login";
import Maps from "./components/maps";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/signup",
    element: <Form />
  },
  {
    path: "/signin",
    element: <Login />
  },
  {
    path: "/main",
    element: <Maps />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
