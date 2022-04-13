import React from "react";
import classes from "./MeetupItem.module.scss";
import Card from "../ui/Card";

const MeetupItem = (props) => {
  console.log(props);
  return (
    <Card>
      <div className={classes.container}>
        <div className={classes.imgContainer}>
          <img src={props.images} alt={props.title} srcSet="" />
        </div>
        <div className={classes.items}>
          <h3 className={classes.itemsTitle}>{props.title}</h3>
          <address className={classes.itemsAddress}>{props.address}</address>
          <p className={classes.itemsDescription}>{props.description}</p>
        </div>
        <div className={classes.btn}>
          <button className={classes.btnFavorite}>To Favorites</button>
        </div>
      </div>
    </Card>
  );
};

export default MeetupItem;
