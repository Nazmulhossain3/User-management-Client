import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Component/Main';
import Home from './Pages/Home/Home';
import CreateUser from './Pages/Users/CreateUser';
import AllUser from './Pages/Users/AllUser';
import UserDetails from './Pages/Users/UserDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/createUser',
        element : <CreateUser></CreateUser>
      },
      {
        path : '/allUser',
        element : <AllUser></AllUser>
      },
      {
        path : '/userDetails',
        element : <UserDetails></UserDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
