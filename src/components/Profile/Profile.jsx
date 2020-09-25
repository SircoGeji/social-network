import React from "react";
import s from "./Profile.module.sass";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { Redirect } from "react-router-dom";

const Profile = (props) => {
  if (!props.isAuth) return <Redirect to={"/login"} />;
  //console.log("profile");
  return (
    <div className={s.content}>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
