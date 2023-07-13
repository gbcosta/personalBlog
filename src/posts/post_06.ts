import { PostData } from "../utils/utils";


const markdown = `# First post

qualquer coisa

qual

- Test
    - test
- Test
- Test
    - test

![image](/image.jpeg)
`

const post: PostData = {
    name: "post_06",
    date: new Date("mar 07 2023"),
    markdown: markdown
}

export default post;

