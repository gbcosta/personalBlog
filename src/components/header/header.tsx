import {AiOutlineHome} from "react-icons/ai";

const Header = () =>{
    const pathname: string = window.location.pathname;

    return <div className="flex mb-24 mt-4 border-b border-zinc-800 pb-4">
        <a href={"/"}>
            <AiOutlineHome className={"text-3xl text-zinc-500 cursor-pointer"} />    
        </a>

        <div className="flex grow"/>
        <div className={"flex flex-row gap-4 text-md text-zinc-400 cursor-pointer font-semibold "}>
            <a href={"/"} className={`${pathname == "/" ? "text-white" :"text-zinc-400" }`}>Home</a>
            <a href={"/posts"} className={`${pathname.search("/posts") > -1 ? "text-white" :"text-zinc-400"}`}>Posts</a>
        </div>
    </div>
}

export default Header;
