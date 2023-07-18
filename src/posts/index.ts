import { PostData } from "../utils/utils.tsx";

type PostsData = Array<PostData>;

const posts: PostsData = [

];

const sortByDate = () =>{
    const sortedRepos = posts.sort((postA: PostData , postB: PostData)=>{
        const dateA: Date = new Date(postA.date);
        const dateB: Date = new Date(postB.date);
        return dateB.getTime() - dateA.getTime();
    })
    return sortedRepos;
}

export default sortByDate();

