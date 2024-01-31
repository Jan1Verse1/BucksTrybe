import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../src/Pages/Home";
import FAQs from "../src/Pages/FAQs";
import ContactUs from "../src/Pages/ContactUs";
import AboutUs from "../src/Pages/AboutUs";
import Communal from "../src/Pages/Communal";
import Ajoo from "../src/Pages/Ajoo";
import Calculator from "./Pages/Calculator";
import Score from "../src/Pages/Score";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/faqs", element: <FAQs /> },
  { path: "/communal", element: <Communal /> },
  { path: "/ajoo", element: <Ajoo /> },
  { path: "/calculator", element: <Calculator /> },
  { path: "/score", element: <Score /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
