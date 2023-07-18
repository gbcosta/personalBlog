import posts from "../../posts";
import { Link } from "react-router-dom";

const Post = (props:{
    name: string,
    date: Date,
}) =>{
    return <div className="text-white flex pb-4 border-b border-zinc-800">
        <Link to={props.name} className="text-bold text-md hover:no-underline cursor-pointer">{props.name}</Link>
        <div className="flex grow" />
        <span className="text-zinc-500">{props.date.toLocaleString().slice(0, 10)}</span>
    </div>
}

const getPosts = () =>{
    //max 5 posts
    const slicedPosts = posts.slice(0, 5);
    return <div className="flex gap-2 flex-col">
        {slicedPosts.map((post, key)=>{
            return <Post name={post.name} date={post.date} key={key} />
        })}
    </div>
}

const Blog = () =>{
    return <div className={"mb-8 "}>
        <h3 className={"text-lg text-left text-white font-bold mb-2 border-b border-zinc-800 pb-4"}>Recent Posts</h3>
        {getPosts()}
    </div>;
}

export default Blog;
