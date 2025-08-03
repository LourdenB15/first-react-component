import "../styles/reset.css";
import "../styles/styles.css";
import ProfilePicture from "./ProfilePicture";
import AboutMe from "./AboutMe";

function Profile() {
    return (
        <div className="profile">
            <div className="wrapper">
            <ProfilePicture />
            <AboutMe />
            </div>
        </div>
    )
}

export default Profile;