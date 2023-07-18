import {AiFillGithub, AiOutlineMail} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai";

const Header = () =>{
    // <a href={"/"} className="text-xl cursor-pointer text-zinc-500">Gabriel Santos</a>
    /*
 *<AiFillGithub className={iconStyle} onClick={(()=>{window.open("https://github.com/");})}/>
            <AiOutlineMail className={iconStyle} onClick={(()=>{window.location.href =
                "mailto:gbcostasant@gmail.com?subject=&body=Gabriel%20Santos";})}/>
 * */ 
    return <div className="flex mb-24 mt-4 border-b border-zinc-800 pb-4">
        <a href={"/"}>
            <AiOutlineHome className={"text-3xl text-zinc-500 cursor-pointer"} />    
        </a>

        <div className="flex grow"/>
        <div className={"flex flex-row gap-4 text-md text-zinc-400 cursor-pointer font-semibold "}>
            <a>Home</a>
            <a>Posts</a>
        </div>
    </div>
}

export default Header;
