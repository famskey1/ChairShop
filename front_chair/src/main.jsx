import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import './index.css'
import ErrorPage from './ErrorPage.jsx'
import App from './App.jsx'
import AppAdmin from './AppAdmin.jsx'
import AppEmplo from './AppEmplo.jsx'
import AppUser from './AppUser.jsx'
import Orders from './Components/TableViews/Orders/GetOrders.jsx'
import Users from './Components/TableViews/Users/GetUsers.jsx'
import Ord_det from './Components/TableViews/Ord_det/GetOrd_det.jsx'
import Products from './Components/TableViews/Products/GetProducts.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <App />
},
{
  path: "/admin_chair",
  element: <AppAdmin />
},
{
  path: "/staff_chair",
  element: <AppEmplo />
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
