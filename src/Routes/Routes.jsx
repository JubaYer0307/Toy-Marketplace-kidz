import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import UpdateToy from "../components/UpdateToy";
import MyToys from "../components/MyToys";
import AllToys from "../components/AllToys";
import AddToy from "../components/AddToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
            path:'alltoys',
            element:<AllToys></AllToys>,
            loader: () => fetch('http://localhost:5000/addatoy')
            
        },
        {
            path: 'mytoys',
            element: <MyToys></MyToys>
        },
        {
            path: 'addatoy',
            element: <AddToy></AddToy>
        },
        {
            path: 'updatetoy',
            element: <UpdateToy></UpdateToy>
        }
      ]
    },
  ]);

  export default router;