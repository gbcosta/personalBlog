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
  auth: "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",
});

const getRepos = async (setRepos: any) => {
    await octokit.request('GET /users/{username}/repos', {
    username: 'gbcosta',
    }).then(data =>{
        setRepos(data);
    })
}

export default getRepos;
