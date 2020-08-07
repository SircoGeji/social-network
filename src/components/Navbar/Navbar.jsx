import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

// let c1 = "item";
// let c2 = "active";
// let classes = c1 + "" + c2;
// let classesNew = `${s.item} ${s.active}`;

// "npm i react-router-dom -save" - доустанавливает пакет для перехода по ссылкам страниц, с записью пакета не только в node_modules, но и в package.json
// NavLink - "ссылка" для перехода без обновления страницы

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/profile">
                    Profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/dialogs">
                    Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/users">
                    Users
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/news">
                    News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/music">
                    Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/settings">
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;