
import { ReposData } from "../../utils/github/github";

const Card = (props: {reposData: ReposData}) =>{
    return (<div>
    <a target="_blank" href={`https://github.com/${props.reposData.full_name}`}>{props.reposData.full_name}</a>
    <p>{props.reposData.description}</p>
    </div>)
}

export default Card;
