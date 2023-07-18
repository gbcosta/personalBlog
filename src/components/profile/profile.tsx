import profilePhoto from "../../assets/me.png";

const Profile = () =>{
    return <div className={"mb-24 flex justify-center items-center flex-col max-w-[24rem] self-center"}>
        <img src={profilePhoto} className="rounded-full max-w-[90px] origin-bottom-left mb-4"/>
        <h2 className={"text-2xl text-white font-bold mb-2"}>Gabriel Santos</h2>
        <p className={"text-white text-base"}> 
            Hi, my name is Gabriel and I'm a full-stack developer with skills
            in JavaScript, TypeScript, HTML, CSS and NodeJS.         
        </p>
    </div>
}

export default Profile;

/*I use Node.js for the
            back-end, and I love programming in the terminal using NVIM. In
            addition to web technologies, I also know a bit about C++ and C#,
            and I'm currently learning GO.
*/
