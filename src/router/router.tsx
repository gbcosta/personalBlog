import {createBrowserRouter, RouteObject, } from "react-router-dom";
import posts from "../posts/index.ts";
import MarkdownPage from "../pages/markdown.tsx";
import HomePage from "../pages/home.tsx";
import ErrorPage from "../pages/errorPage.tsx";
import PostsPage from "../pages/postsPage.tsx";
import AboutPage from "../pages/aboutPage.tsx";

const getPostRoutes = () =>{
    const postRoutes: Array<RouteObject> = [];
    posts.map((post) =>{
        postRoutes.push({
            path: `/posts/${post.name}`,
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
    {
        path: "/posts",
        element: <PostsPage />,
        errorElement: <ErrorPage />
    },
{
        path: "/about",
        element: <AboutPage />,
        errorElement: <ErrorPage />
    },

    ...getPostRoutes()
])

export default router;
