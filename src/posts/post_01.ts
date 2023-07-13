
type PostData = {
    name: string;
    data: Date;
    markdown: string;
}

const markdown = `# First post

qualquer coisa

- Test
    - test
- Test
- Test
    - test
![image](/image.jpeg)
`

const post: PostData = {
    name: "test",
    data: new Date("07-07-2023"),
    markdown: markdown
}

export default post;
