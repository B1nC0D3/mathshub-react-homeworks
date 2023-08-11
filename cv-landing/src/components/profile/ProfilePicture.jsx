import React from 'react';
import profilePic from '../../imgs/profile_pic.jpg';

function ProfilePicture() {
  return (
    <div>
      <img src={profilePic} alt="profile pic" />
    </div>
  );
}

export default ProfilePicture;
