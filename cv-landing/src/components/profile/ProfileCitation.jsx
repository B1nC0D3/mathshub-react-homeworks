import React from "react";


function ProfileCitation({userCitation}) {
    return (
        <div>
            <span>Любимая цитата: </span>
            <span>{userCitation}</span>
        </div>
    )
}

export default ProfileCitation