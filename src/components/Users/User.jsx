import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, follow, unfollow, ...props}) => {
    return <div>
        <Paginator totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   currentPage={currentPage}
                   //selectedPage={selectedPage}
                   onPageChanged={onPageChanged}
        />
        {
            users.map(u => <div
                key={u.id}
                className={styles.users}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null
                            ? u.photos.small
                            : userPhoto}
                             alt="userImage"/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={followingInProgress
                                .some(id => id === u.id)}
                                      onClick={() => {unfollow(u.id)}}>Unfollow</button>
                            : <button disabled={followingInProgress
                                .some(id => id === u.id)}
                                      onClick={() => {follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users

