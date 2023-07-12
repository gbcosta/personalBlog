import getRepos, {GithubData, ReposData} from "../../utils/github/github";
import { createReposCard } from "../../utils/utils";
import { useEffect, useState } from "preact/hooks";



const Projects = ()=>{
    const [repos, setRepos] = useState<GithubData>();
useEffect(()=>{
        getRepos(setRepos);
        console.log(repos);
    }, [])   

    return( <div>
        {createReposCard(repos)}
    </div>)
}

export default Projects;
