import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./markdown.css";
import { PostData } from "../utils/utils.tsx";

const MarkdownPage = (props:{
    post: PostData
}) =>{
    return(
        <div>
            <ReactMarkdown className="markdown" children={props.post.markdown}/>
        </div>
    )
}

export default MarkdownPage;
