import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";
import Contact from "./components/Contact/Contact.jsx";

export default function App() {
  let router = createBrowserRouter([
    {path: "/",element: <MainLayout />,children: [
        { index: true, element: <Home /> },
        { path: "Contact", element: <Contact /> },
        { path: "About", element: <About /> },
        { path: "Portfolio", element: <Portfolio /> },
        { path: "*", element: <PageNotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
