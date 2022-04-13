import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = (props) => {
  console.log(props);
  return (
    <div className={classes.list}>
      {props.meetups.map((data) => (
        <MeetupItem
          key={data.id}
          description={data.description}
          images={data.image}
          title={data.title}
          id={data.id}
          address={data.address}
        />
      ))}
    </div>
  );
};

export default MeetupList;
