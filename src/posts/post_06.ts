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
    date: new Date("07 12 2023"),
    markdown: markdown
}

export default post;

