import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Receipe from "../pages/Receipe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/Blog',
                element: <Blog></Blog>
            },
            {
                path: '/'
            },
            {
                path: "/Chef/:id",
                element: <Receipe></Receipe>,
                loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
              },

        ]

    }
])

export default router;