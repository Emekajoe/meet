import React from "react";
import MeetupItem from "../meetups/MeetupItem";
import MeetupList from "../meetups/MeetupList";

const data = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: "./images/rMeetUp1.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be.",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image: "./images/rMeetUp2.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be.",
  },
  {
    id: "m3",
    title: "This is a third meetup",
    image: "./images/rMeetUp3.png",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be.",
  },
];

const AllMeetups = () => {
  console.log(data);
  return (
    <div>
      <MeetupList meetups={data} />
    </div>
  );
};

export default AllMeetups;
