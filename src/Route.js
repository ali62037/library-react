import React from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import About from './screen/About';
import Catalog from './screen/Catalog';
import Contact from './screen/Contact';
import Self from './screen/Self';
import Home from './screen/Home';
import Gallery from './screen/Gallery';


const router = createBrowserRouter([
    {
      path: "/library-react/",
      element: <Home/>,
    },
    {
      path: "/library-react/about",
      element: <About/>,
    },
    {
      path: "/library-react/catalog",
      element: <Catalog/>,
    },
    {
      path: "/library-react/contact",
      element : <Contact/>,
    },
    {
      path: "/library-react/gallery",
      element: <Gallery/>,
    },
    {
      path: "/library-react/self",
      element: <Self/>,
    },
  ]);
  

function Route() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Route
