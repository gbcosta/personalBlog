import HomePage from "./pages/home.tsx";
import MarkdownPage from "./pages/markdown.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    }
])

export function App() {

  return (
    <div className={"px-[36rem]"}>
            <RouterProvider router={router} /
    </div>
  )
}
