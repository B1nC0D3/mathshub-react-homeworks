import React from "react";


function ProfileHobbies({userHobbies}) {
    return (
        <div>
            <span>Хобби: </span>
            <span>{userHobbies}</span>
        </div>
    )
}

export default ProfileHobbies