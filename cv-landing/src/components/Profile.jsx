import React from 'react';
import ProfileBio from './profile/ProfileBio';
import ProfileHobbies from './profile/ProfileHobbies';
import ProfileCitation from './profile/ProfileCitation';
import ProfileName from './profile/ProfileName';
import ProfilePicture from './profile/ProfilePicture';
import ProfileCounter from "./profile/ProfileCounter";
import './Profile.css'

function Profile({
                     userImage, userName, userBio, userHobbies, userCitation
                 }) {
    return (
        <div className="profile_wrapper">
            <div className="profile__inner_wrapper">
                <div className="profile__picture_wrapper">
                    <ProfilePicture userImage={userImage}/>
                </div>
                <div className="profile__info_wrapper">
                    <ProfileName userName={userName}/>
                    <ProfileBio userBio={userBio}/>
                    <ProfileHobbies userHobbies={userHobbies}/>
                    <ProfileCitation userCitation={userCitation}/>
                </div>
            </div>
            <div className="counter_wrapper">
                <ProfileCounter/>
            </div>
        </div>
    );
}

export default Profile;
