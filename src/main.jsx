import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Errorpage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Products from './Components/Products/Products.jsx';
import Dashboard from './Components/Dashboard/Dashboard.jsx';
import Details from './Components/Details/Details.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        children:[
          {
            path: '/',
            element: <Products></Products>,
            loader: ({params})=> fetch('/products.json'),
            children:[
              {
                path: '/:category',
                element: <Products></Products>,
                loader: ({params})=> fetch(`/products.json`),
              }
            ]
          }
        ],
      }, 
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        loader: ()=> fetch('/products.json'),
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
        loader: ()=> fetch('/products.json'),
      },
      {
        path:"/details/:productId",
        element: <Details></Details>,
        loader: ({params})=> fetch('/products.json'),
      }
    ]
  },
 
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
