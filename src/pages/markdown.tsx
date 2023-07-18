import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { PostData } from "../utils/utils.tsx";
import "./markdown.css";

const MarkdownPage = (props:{
    post: PostData
}) =>{

    return(
        <div>
            <ReactMarkdown  className="Markdown" children={props.post.markdown}/>
        </div>
    )
}

export default MarkdownPage;
