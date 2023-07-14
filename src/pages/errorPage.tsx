import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    type Error = {statusText: string};
    const error: Error = useRouteError() as Error;
    console.error(error);

    return (
        <div id="error-page" className={"flex flex-col gap-16 justify-center text-white text-center h-screen"}>
            <h1 className={"text-8xl"}>Oops!</h1>
            <p className={"text-xl"}>Sorry, an unexpected error has occurred.</p>
            <p className={"text-xl text-zinc-400"}>{error.statusText}</p>
        </div>
    );
}
