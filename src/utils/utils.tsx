import { GithubData, ReposData } from "./github/github"
import Card from "../components/card/card.tsx";

const filterRepos = (repos: GithubData)=>{
    const filteredRepos = repos.data.filter((repo: ReposData) =>{
        return repo.visibility == "public";
    })
    console.log(filteredRepos);
    return filteredRepos;
}

const sortByDate = (repos: ReposData[]) =>{
    const sortedRepos = repos.sort((repoA: ReposData, repoB: ReposData)=>{
        const dateA: Date = new Date(repoA.created_at);
        const dateB: Date = new Date(repoB.created_at);
        return dateB.getTime() - dateA.getTime();
    })
    console.log(sortedRepos);
    return sortedRepos;
}
const createCards = (repos: ReposData[]) =>{
    const cards = repos.map((repo: ReposData)=>{
        return <Card reposData={repo}/>
    })
    return cards;
}
export const createReposCard = (repos: GithubData) =>{
    if(!repos)
        return;
    const filteredRepos = filterRepos(repos);
    const sortedRepos = sortByDate(filteredRepos);
    const cards = createCards(sortedRepos);
    return cards;
}


