import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Receipe from "../pages/Receipe";
import About from "../pages/About/About";
import Login from "./Login";
import Register from "./Register";
import ErrorPage from "../pages/ErrorPage/ErrrorPage";
import Private_Route from "./Private_Route";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,

        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/About',
                element: <About></About>
            },
            {
                path: '/Blog',
                element: <Blog></Blog>
                
            },
            {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path: '/Register',
                element: <Register></Register>
            },
            {
                path: "/Chef/:id",
                element: <Private_Route>
                    <Receipe></Receipe>
                </Private_Route>,
                loader: ({params}) => fetch(`https://indian-masala-house-server-tonniemasarker-gmailcom.vercel.app/chef/${params.id}`)
              },

        ]

    }
])

export default router;
// fff