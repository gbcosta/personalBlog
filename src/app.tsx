import {RouterProvider} from "react-router-dom";
import Header from "./components/header/header.tsx";

import router from "./router/router.tsx";

export function App() {

    return (
        <div className={"px-[36rem]"}>
            <Header />
            <RouterProvider router={router} />
        </div>
    )
}
