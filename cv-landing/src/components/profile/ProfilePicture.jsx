import React from "react";


function ProfilePicture({userImage}) {
    return(
        <div>
            <img src={userImage} alt="profile pic"/>
        </div>
    )
}

export default ProfilePicture