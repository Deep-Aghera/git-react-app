import React from "react";
import './ProfileCard.css'
// const user = {
//   name: "Matthew White",
//   role: "Software Engineer",
//   email: "matthewwhite@example.com",
//   github_profile: "https://github.com/matthewwhite",
//   city: "New York",
//   avatar: "https://avatars.githubusercontent.com/u/6627741?v=4",
// };
export default function ProfileCard(props) {

    const {name , role, email,github_profile,city, avatar, id} = props.user;

  return (
    <>
    {/* {console.log(name,role,email,github_profile,city,avatar)} */}
      <div className="container" key={id}>
        <div className="user-avatar-section">
          <img style={{ height: "60px" }} src={`${avatar}`} alt="" />
        </div>
        <div className="user-detail-section">
         <a href={`${github_profile}`}><div className="user-name">{name}</div></a> 
          <div className="user-role">{role}</div>
          <div className="last-section">
            <div className="user-city">{city}</div>
            <div className="user-email">{email}</div>
          </div>
        </div>
      </div>
    </>
  );
}
