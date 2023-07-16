import getRepos, {GithubData} from "../../utils/github/github";
import { createReposCard } from "../../utils/utils";
import { useEffect, useState } from "react";

const getCards = (repos: GithubData) =>{
    if(!repos) return;

    const _repos = createReposCard(repos);

    if(!_repos) return;

    const _reposTop = _repos.slice(0, 3);
    const _reposBottom = _repos.slice(3, 6);

    const CardsContainer = <div className={"flex flex-col gap-4 items-center w-full"}> 
            <div className={"flex gap-4 w-full"}>
            {_reposTop}
        </div>
        <div className={"flex gap-4 w-full"}>
            {_reposBottom}
        </div>
    </div>

    return CardsContainer;
}

const Projects = ()=>{
    const [repos, setRepos] = useState<GithubData>();
    
    useEffect(()=>{
        getRepos(setRepos);
    }, [])   

    return( 
        <div className={"flex flex-col gap -4"}>
            <h2 className={"text-4xl text-white font-bold mb-8"}>Projects</h2>
        {!repos ? "" : getCards(repos)}
    </div>)
}

export default Projects;
