import React, { useRef } from "react";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = () => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    console.log(meetupData);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.title}>
        <label htmlFor="title">Meetup Title</label>
        <input type="text" name="title" id="title" ref={titleInputRef} />
      </div>
      <div className={classes.image}>
        <label htmlFor="image">Meetup Image</label>
        <input type="url" name="image" id="image" ref={imageInputRef} />
      </div>
      <div className={classes.address}>
        <label htmlFor="address">Address</label>
        <input type="url" name="address" id="address" ref={addressInputRef} />
      </div>
      <div className={classes.description}>
        <label htmlFor="address">Description</label>
        <textarea
          name="Description"
          id="description"
          cols="20"
          rows="10"
          ref={descriptionInputRef}
        ></textarea>

        <button>Add Meetup</button>
      </div>
    </form>
  );
};

export default NewMeetupForm;
