import React from "react";
import ProfileCard from "./ProfileCard";
//import users from '../gitData/data.json';
//import CitySelector from "./CitySelector";

export default function ProfileList(props) {
  const usersP = props.users;

  //console.log("from profileList",props)
  return (
    <>
      {usersP.map((item) => {
        return (
          <ProfileCard key={item.id} user={item} />
        );
      })}
    </>
  );
}
