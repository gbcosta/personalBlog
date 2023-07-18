import { PostData } from "../utils/utils";


const markdown = `# Example Post

Example

-  Example
- Example
    - Example
- Example
    - Example

![image](/image.jpeg)
`

const post: PostData = {
    name: "Example",
    date: new Date("mar 03 2013"),
    markdown: markdown
}

export default post;
