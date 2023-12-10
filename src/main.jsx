import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Header/Header';
import ErrorElement from './errorElement/ErrorElement';
import Home from './Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:'*',
        element: <ErrorElement></ErrorElement>
      }
    ]
  },
  {
    path: '*',
    element: <ErrorElement></ErrorElement>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
