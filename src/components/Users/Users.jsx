import styles from "./Users.module.sass";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  followingInProgress,
  follow,
  unfollow,
  onPagesPaginator,
  showMorePages,
  ...props
}) => {
  return (
    <div>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        onPagesPaginator={onPagesPaginator}
        showMorePages={showMorePages}
      />
      {users.map((u) => (
        <User
          user={u}
          key={u.id}
          className={styles.users}
          followingInProgress={followingInProgress}
          follow={follow}
          unfollow={unfollow}
        />
      ))}
    </div>
  );
};

export default Users;
