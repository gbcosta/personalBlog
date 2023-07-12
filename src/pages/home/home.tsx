import Header from "../../components/header/header";
import Projects from "../../components/projects/projects";
import Profile from "../../components/profile/profile";

const HomePage = () =>{
    return <div className={"flex flex-col"}>
        <Header />
        <Profile />
        <Projects />

    </div>
}

export default HomePage;
