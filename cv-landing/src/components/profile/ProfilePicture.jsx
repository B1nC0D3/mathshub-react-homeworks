import React from "react";
import './ProfilePicture.css'

function ProfilePicture({userImage}) {
    return(
        <div className="profile__picture">
            <img src={userImage} alt="profile pic"/>
        </div>
    )
}

export default ProfilePicture