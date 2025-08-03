import "../styles/reset.css";
import "../styles/styles.css";
import ProfilePicture from "./ProfilePicture";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

function Profile() {
    return (
        <div className="profile">
            <div className="wrapper">
            <ProfilePicture />
            <AboutMe />
            <Skills />
            </div>
        </div>
    )
}

export default Profile;