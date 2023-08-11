import React from 'react';
import ProfileBio from './profile/ProfileBio';
import ProfileHobbies from './profile/ProfileHobbies';
import ProfileCitation from './profile/ProfileCitation';
import ProfileName from './profile/ProfileName';
import ProfilePicture from './profile/ProfilePicture';

function Profile({
  userImage, userName, userBio, userHobbies, userCitation
}) {
  return (
    <div>
      <div>
        <ProfilePicture userImage={userImage} />
      </div>
      <div>
        <ProfileName userName={userName} />
        <ProfileBio userBio={userBio} />
        <ProfileHobbies userHobbies={userHobbies} />
        <ProfileCitation userCitation={userCitation} />
      </div>
    </div>
  );
}

export default Profile;
