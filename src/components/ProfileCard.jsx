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


const newUser = {
  "login": "mojombo",
  "id": 1,
  "node_id": "MDQ6VXNlcjE=",
  "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mojombo",
  "html_url": "https://github.com/mojombo",
  "followers_url": "https://api.github.com/users/mojombo/followers",
  "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
  "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
  "organizations_url": "https://api.github.com/users/mojombo/orgs",
  "repos_url": "https://api.github.com/users/mojombo/repos",
  "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mojombo/received_events",
  "type": "User",
  "site_admin": false
}
export default function ProfileCard(props) {

   // console.log(props)
    //const {name , role, email,github_profile,city, avatar, id} = props.user;
    const {login , type,url,avatar_url,id} = props.user;

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
