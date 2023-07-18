import {AiFillGithub, AiOutlineMail} from "react-icons/ai"

const Footer = () =>{
    const iconStyle = "text-3xl text-zinc-500 cursor-pointer"
    return <div className={"flex flex-col self-center mt-36 gap-4 items-center mb-4"}> 
        <div className={"flex gap-4"}>
            <AiFillGithub className={iconStyle} onClick={(()=>{window.open("https://github.com/");})}/>
            <AiOutlineMail className={iconStyle} onClick={(()=>{window.location.href =
                "mailto:gbcostasant@gmail.com?subject=&body=Gabriel%20Santos";})}/>
        </div>
        <p className={"text-zinc-500"}>@ Koda</p>
    </div>
}

export default Footer;
