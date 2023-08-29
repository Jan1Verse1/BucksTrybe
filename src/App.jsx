import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { FormProvider } from "../src/components/context/Formcontext";

import Home from "../src/Pages/Home";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import SectionOne from "./pages/SectionOne";
// import SectionTwo from "./pages/SectionTwo";
// import SectionThree from "./pages/SectionThree";
// import SectionFour from "./pages/SectionFour";
// import TempStaff from "./pages/TempStaff";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  // { path: "/contact", element: <Contact /> },
  // { path: "/about", element: <About /> },
  // { path: "/SectionOne", element: <SectionOne /> },
  // { path: "/SectionTwo", element: <SectionTwo /> },
  // { path: "/SectionThree", element: <SectionThree /> },
  // { path: "/SectionFour", element: <SectionFour /> },
  // { path: "/TempStaff", element: <TempStaff /> },
]);

const App = () => {
  return (
    // <FormProvider>
    <RouterProvider router={router} />
    // </FormProvider>
  );
};

export default App;
