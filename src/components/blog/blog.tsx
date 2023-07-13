import posts from "../../posts";

const Post = (props:{
    name: string,
    date: Date,
}) =>{
    console.log(props);
    return <div className="text-white flex">
        <h2>{props.name}</h2>
        <div className="flex grow" />
        <span>{props.date.toLocaleString()}</span>
    </div>
}

const getPosts = () =>{
    console.log(posts);
    return <div>
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
