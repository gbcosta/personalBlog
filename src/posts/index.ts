import { PostData } from "../utils/utils.tsx";
import post_01 from "./post_01.tsx";
import post_02 from "./post_02.tsx";
import post_03 from "./post_03.tsx";
import post_04 from "./post_04.tsx";
import post_05 from "./post_05.tsx";
import post_06 from "./post_06.tsx";


type PostsData = Array<PostData>;


const posts: PostsData = [
    post_01,
    post_02,
    post_03,
    post_04,
    post_05,
    post_06,
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

