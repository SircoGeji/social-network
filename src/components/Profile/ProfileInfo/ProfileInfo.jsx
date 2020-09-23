import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  return (
    <div>
      <img className={styles.profileImage} src={profile.photos.large} />
      <div className={styles.aboutMe}>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
      <div className={styles.aboutMe}>{profile.aboutMe}</div>
    </div>
  );
};

export default ProfileInfo;
