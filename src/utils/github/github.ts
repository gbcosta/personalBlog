import { Octokit } from "octokit";

export type GithubData = {
    data: Array<ReposData>;
}

export type ReposData = {
    created_at: string;
    description: string;
    full_name: string;
    visibility: string;
}
const octokit = new Octokit({ 
  auth: import.meta.env.VITE_GITHUB_KEY,
});

const getRepos = async (setRepos: any) => {
    await octokit.request('GET /users/{username}/repos', {
        username: 'gbcosta',
    }).then(data =>{
        setRepos(data);
    }).catch((e)=>console.log(e));
}

export default getRepos;
