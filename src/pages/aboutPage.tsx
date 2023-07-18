import Projects from "../components/projects/projects";

const AboutPage = ()=>{
    return <div>
            <h2 className={"text-white text-4xl text-left font-bold mb-8"}>About Me</h2>
        <p className={"text-white text-base"}>
            Hi, my name is Gabriel and I'm a full-stack developer with skills in JavaScript, TypeScript, HTML, CSS and NodeJS.
            I love programming in the terminal using NVIM and TMUX. In
            addition to web technologies, I also know a bit about C++ and C#,
            and I'm currently learning Rust.
        </p>
        <h3 className={"text-white text-2xl text-left font-bold mb-8 mt-4"}>Projects</h3>
        <Projects />
    </div>
}

export default AboutPage;
