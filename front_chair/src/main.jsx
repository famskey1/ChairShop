import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import ErrorPage from './ErrorPage.jsx'
import App from './App.jsx'
import AppAdmin from './AppAdmin.jsx'
import AppEmplo from './AppEmplo.jsx'
import AppUser from './AppUser.jsx'

import PostOrders from './Components/TableViews/Orders/PostOrders.jsx'
import PostOrd_det from './Components/TableViews/Ord_det/PostOrd_det.jsx'
import PostUsers from './Components/TableViews/Users/PostUsers.jsx'
import PostProducts from './Components/TableViews/Products/PostProducts.jsx'

import PutOrders from './Components/TableViews/Orders/PutOrders.jsx'
import PutOrd_det from './Components/TableViews/Ord_det/PutOrd_det.jsx'
import PutUsers from './Components/TableViews/Users/PutUsers.jsx'
import PutProducts from './Components/TableViews/Products/PutProducts.jsx'

import DeleteOrders from './Components/TableViews/Orders/DeleteOrders.jsx'
import DeleteOrd_det from './Components/TableViews/Ord_det/DeleteOrd_det.jsx'
import DeleteUsers from './Components/TableViews/Users/DeleteUsers.jsx'
import DeleteProducts from './Components/TableViews/Products/DeleteProducts.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />
},
{
  path: "/admin_chair/",
  children:[
    {
      path: "",
      element: <AppAdmin />
    },
    {
      path:"post/orders",
      element: <PostOrders/>
    },
    {
      path:"post/ord_det",
      element:<PostOrd_det/>
    },
    {
      path:"post/users",
      element: <PostUsers/>
    },
    {
      path:"post/products",
      element:<PostProducts/>
    },
    {
      path:"delete/orders/:id",
      element:<DeleteOrders/>
    },
    {
      path:"delete/ord_det/:id",
      element:<DeleteOrd_det/>
    },
    {
      path:"delete/users/:id",
      element:<DeleteUsers/>
    },
    {
      path:"delete/products/:id",
      element:<DeleteProducts/>
    },
    {
      path:"put/orders/:id",
      element:<PutOrders/>
    },
    {
      path:"put/ord_det/:id",
      element:<PutOrd_det/>
    },
    {
      path:"put/users/:id",
      element:<PutUsers/>
    },
    {
      path:"put/products/:id",
      element:<PutProducts/>
    }
   
  ]
},
{
  path: "/staff_chair/",
  children:[{
    path:"",
    element: <AppEmplo />
  },
  {
      path:"post/orders",
      element: <PostOrders/>
    },
    {
      path:"post/ord_det",
      element:<PostOrd_det/>
    },
    {
      path:"post/users",
      element: <PostUsers/>
    },
    {
      path:"post/products",
      element:<PostProducts/>
    },
    {
      path:"delete/orders/:id",
      element:<DeleteOrders/>
    },
    {
      path:"delete/ord_det/:id",
      element:<DeleteOrd_det/>
    },
    {
      path:"delete/users/:id",
      element:<DeleteUsers/>
    },
    {
      path:"delete/products/:id",
      element:<DeleteProducts/>
    },
    {
      path:"put/orders/:id",
      element:<PutOrders/>
    },
    {
      path:"put/ord_det/:id",
      element:<PutOrd_det/>
    },
    {
      path:"put/users/:id",
      element:<PutUsers/>
    },
    {
      path:"put/products/:id",
      element:<PutProducts/>
    }
]
},
{
  path: "/users_chair/:id",
  element: <AppUser/>
},
{
  path: "*",
  element: <ErrorPage />
}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
