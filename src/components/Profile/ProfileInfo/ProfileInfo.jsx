import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    className={styles.profileImage}
                    src={props.profile.photos.large}
                />
                <div className={styles.aboutMe}>
                    <ProfileStatusWithHooks
                        status={props.status}
                        updateStatus={props.updateStatus}
                    />
                </div>
                <div className={styles.aboutMe}>
                    {props.profile.aboutMe}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo