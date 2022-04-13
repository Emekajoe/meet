import React from "react";
import NewMeetupForm from "./NewMeetupForm";
import classes from "./NewMeetupPage.module.css";

const NewMeetupPage = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Add New Meetup</h2>
      <NewMeetupForm />
    </div>
  );
};

export default NewMeetupPage;
