import posts from "../../posts";

const Post = (props:{
    name: string,
    date: Date,
}) =>{
    console.log(props);
    return <div className="text-white flex text-xl pb-4 border-b border-white">
        <h2 className="text-bold underline underline-offset-4 hover:no-underline cursor-pointer">{props.name}</h2>
        <div className="flex grow" />
        <span className="text-zinc-500">{props.date.toLocaleString().slice(0, 10)}</span>
    </div>
}

const getPosts = () =>{
    console.log(posts);
    return <div className="flex gap-2 flex-col">
        {posts.map((post, key)=>{
            return <Post name={post.name} date={post.date} key={key} />
        })}
    </div>
}

const Blog = () =>{
    return <div>
        <h2 className={"text-4xl text-white font-bold mb-8"}>Blog</h2>
        {getPosts()}
    </div>;
}

export default Blog;
