import MarkdownPage from "../pages/markdown.tsx";
import HomePage from "../pages/home.tsx";
import {createBrowserRouter, RouteObject, } from "react-router-dom";
import ErrorPage from "../pages/errorPage.tsx";
import posts from "../posts/index.ts";



const getPostRoutes = () =>{
    const postRoutes: Array<RouteObject> = [];
    posts.map((post) =>{
        postRoutes.push({
            path: post.name,
            element: <MarkdownPage post={post} />,
            errorElement: <ErrorPage />
        })
    })

    return postRoutes;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />
    },
    ...getPostRoutes()
])

export default router;
