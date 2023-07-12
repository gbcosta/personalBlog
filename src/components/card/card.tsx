
import { ReposData } from "../../utils/github/github";

const Card = (props: {reposData: ReposData}) =>{
    const patternUserName = /gbcosta\//;
    const projectName = props.reposData.full_name.replace(patternUserName, "");
    return (
        <div className="text-white flex flex-col gap-4 w-full h-24 border-b-white border-b-2">
            <a className={"w-fit overflow-hidden break-all text-base font-bold text-gray-300 hover:no-underline underline underline-offset-4"} target="_blank" href={`https://github.com/${props.reposData.full_name}`}>
                {projectName}
            </a>
            <p className={"text-base overflow-auto break-all flex justify-self-end"}>{props.reposData.description}</p>
        </div>)
}

export default Card;
