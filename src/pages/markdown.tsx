import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./markdown.css";
import posts from "../posts/index.ts";

const MarkdownPage = () =>{
    return(
        <div>
            <ReactMarkdown className="markdown" children={posts[0].markdown}/>
        </div>
    )
}

export default MarkdownPage;
