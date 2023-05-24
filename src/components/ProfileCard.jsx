import React from "react";
import './ProfileCard.css'
 
export default function ProfileCard(props) {

  
    //const {name , role, email,github_profile,city, avatar, id} = props.user;
    
    const {login,type,url,avatar_url,id} = props.user;

  return (
    <>
    {/* {console.log(name,role,email,github_profile,city,avatar)} */}
      <div className="container" key={id}>
        <div className="user-avatar-section">
          <img style={{ height: "60px" }} src={`${avatar_url}`} alt="" />
        </div>
        <div className="user-detail-section">
         <a href={`${url}`}><div className="user-name">{login}</div></a> 
          <div className="user-role">{type}</div>
          <div className="last-section">
            {/* <div className="user-city">{city}</div>
            <div className="user-email">{email}</div> */}
          </div>
        </div>
      </div>
    </>
  );
}
