import React from "react";
import styles from "./Navbar.module.sass";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.item}>
          <NavLink activeClassName={styles.activeLink} to="/profile">
            Profile
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink activeClassName={styles.activeLink} to="/dialogs">
            Messages
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink activeClassName={styles.activeLink} to="/users">
            Users
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink activeClassName={styles.activeLink} to="/news">
            News
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink activeClassName={styles.activeLink} to="/music">
            Music
          </NavLink>
        </div>
        <div className={styles.item}>
          <NavLink activeClassName={styles.activeLink} to="/settings">
            Settings
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
