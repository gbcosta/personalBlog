import {AiFillGithub, AiOutlineMail} from "react-icons/ai"

const Header = () =>{
    const iconStyle = "cursor-pointer";
    
    return <div className="flex mb-8 mt-4">
        <a className="text-xl text-zinc-500">Gabriel Santos</a>
        <div className="flex grow"/>
        <div className={"flex flex-row gap-4 text-2xl text-zinc-500"}>
            <AiFillGithub className={iconStyle} onClick={(()=>{window.open("https://github.com/");})}/>
            <AiOutlineMail className={iconStyle} onClick={(()=>{window.location.href =
                "mailto:gbcostasant@gmail.com?subject=&body=Gabriel%20Santos";})}/>
        </div>
    </div>
}

export default Header;
