import classes from "./Layout.module.css";
import React, { useState, useEffect } from "react";
import MainNavigation from "./MainNavigation";
const Layout = (props) => {
  const [data, setData] = useState([1, 2, 3, 5, 3]);

  useEffect(() => {
    const dat = localStorage.setItem("data", data);
    const myItem = localStorage.getItem("data");
    setData(myItem);
  }, []);

  console.log(typeof data);

  return (
    <div className={classes.main}>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
};
export default Layout;
