import React from 'react';
import ProfileBio from './profile/ProfileBio';
import ProfileHobbies from './profile/ProfileHobbies';
import ProfileCitation from './profile/ProfileCitation';
import ProfileName from './profile/ProfileName';
import ProfilePicture from './profile/ProfilePicture';

function Profile() {
  return (
    <div>
      <div>
        <ProfilePicture />
      </div>
      <div>
        <ProfileName />
        <ProfileBio />
        <ProfileHobbies />
        <ProfileCitation />
      </div>
    </div>
  );
}

export default Profile;
