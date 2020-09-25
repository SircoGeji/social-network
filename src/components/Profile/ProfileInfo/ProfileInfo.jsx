import React from "react";
import styles from "./ProfileInfo.module.sass";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  return (
    <div>
      <img
        src={profile.photos.large != null ? profile.photos.large : userPhoto}
        alt="profileImage"
        className={styles.profileImage}
      />
      <div className={styles.aboutMe}>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
      <div className={styles.aboutMe}>{profile.aboutMe}</div>
    </div>
  );
};

export default ProfileInfo;
