import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyTodo from "../pages/MyTodo";
import MyFavorite from "../pages/MyFavorite";
import NonFound from "../pages/NonFound";
import AppLayout from "../layout/AppLayout";
import Signup from "../pages/Signup";


const router = createBrowserRouter([
  {path: '/login', element: <Login /> },
  {path: '/signup', element: <Signup /> },
    {element: <AppLayout />, children: [
      {path: '/', element: <Home /> },
      {path: '/login', element: <Login /> },
      {path: '/mytodo', element: <MyTodo /> },
      {path: '/myfavorite', element: <MyFavorite /> },
      {path: '*', element: <NonFound /> },
      
    ] },
    

])

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
