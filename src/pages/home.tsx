import Projects from "../components/projects/projects";
import Profile from "../components/profile/profile";
import Blog from "../components/blog/blog";

const HomePage = () =>{
    return <div className={"flex flex-col"}>
        <Profile />
        <Blog />
    </div>
}

export default HomePage;
