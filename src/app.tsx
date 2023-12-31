import {RouterProvider} from "react-router-dom";
import Header from "./components/header/header.tsx";
import router from "./router/router.tsx";
import Footer from "./components/footer/footer.tsx";

export default function App() {

    return (
        <div className={"mx-auto px-2 max-w-[55rem]"}>
            <Header />
            <div className={"mx-auto px-2 max-w-[45rem]"}>
                <RouterProvider router={router} />
            </div>
            <Footer />
        </div>
    )
}

