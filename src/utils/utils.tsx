import { GithubData, ReposData } from "./github/github"
import Card from "../components/card/card.tsx";

const filterRepos = (repos: GithubData)=>{
    const filteredRepos = repos.data.filter((repo: ReposData) =>{
            return repo.visibility == "public";
            })
    return filteredRepos;
}

const sortByDate = (repos: ReposData[]) =>{
    const sortedRepos = repos.sort((repoA: ReposData, repoB: ReposData)=>{
        const dateA: Date = new Date(repoA.created_at);
        const dateB: Date = new Date(repoB.created_at);
        return dateB.getTime() - dateA.getTime();
    })
    return sortedRepos;
}

const createCards = (repos: ReposData[]) =>{
    const cards = repos.map((repo: ReposData, key: any )=>{
        return <Card reposData={repo} key={key}/>
    })
    return cards;
}

export const createReposCard = (repos: GithubData | undefined) =>{
    if(!repos){
        return;
    }

    const filteredRepos = filterRepos(repos);
    const sortedRepos = sortByDate(filteredRepos);
    const cards = createCards(sortedRepos).slice(0, 6);

    return cards;
}

export type PostData = {
    name: string;
    date: Date;
    markdown: string;
}
