import "../styles/reset.css";
import "../styles/styles.css";
import profilePic from "../assets/den-p.png";

function ProfilePicture() {
    return (
        <div className="profile-picture">
            <img src={profilePic} alt="Den" />
        </div>
    )
}

export default ProfilePicture;