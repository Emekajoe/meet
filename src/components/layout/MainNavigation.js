import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headText}>React Meetups</div>
      <nav className={classes.nav}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <Link to="/">All Meetups</Link>
          </li>

          <li>
            <Link to="/new-meetup">Add New Meetups</Link>
          </li>

          <li>
            <Link to="/favorites">My Favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
