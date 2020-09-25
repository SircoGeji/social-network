import React from "react";
import "./ProfileInfo.sass";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  return (
    <div>
      <img
        className="profileImage"
        src={profile.photos.large}
        alt="profileImage"
      />
      <div className="aboutMe">
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
      <div className="aboutMe">{profile.aboutMe}</div>
    </div>
  );
};

export default ProfileInfo;
