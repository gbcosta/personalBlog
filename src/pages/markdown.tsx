import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./markdown.css";
import post from "../posts/post_01.ts";

const MarkdownPage = () =>{
    return(
        <div>
            <ReactMarkdown className="markdown" children={post.markdown}/>
        </div>
    )
}

export default MarkdownPage;
