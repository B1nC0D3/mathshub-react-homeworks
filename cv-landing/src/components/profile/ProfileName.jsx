import React from "react";

function ProfileName({userName}) {
    return (
        <div>
            <span>Имя: </span>
            <span>{userName}</span>
        </div>
    )
}

export default ProfileName