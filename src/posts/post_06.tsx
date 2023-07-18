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
    name: "test",
    date: new Date("mar 07 2023"),
    markdown: markdown
}

export default post;