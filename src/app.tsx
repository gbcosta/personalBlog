import {RouterProvider} from "react-router-dom";
import Header from "./components/header/header.tsx";

import router from "./router/router.tsx";

export function App() {

    return (
        <div className={"mx-auto px-2 max-w-[45rem]"}>
            <Header />
            <RouterProvider router={router} />
        </div>
    )
}
