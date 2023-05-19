import React from "react";

export default function CitySelector(props) {
  
    const users = props.users;
    const usersRenderData = props.usersRenderData;
    var uniqueCities = [...new Set(users.map(profile => profile.city))];
  

    const handleChange= (e) => {
        const selectedCity = e.target.value;

       if(selectedCity === "all" ) {
        props.handleUsersRender(users)
        return
       }
       
       
        const filterUser = users.filter((item) => {
            return item.city === e.target.value
        })
        props.handleUsersRender(filterUser)
     //   console.log(filterUser)

    }
     

    return(
    <>
      <label htmlFor="cars">Choose a city:</label>
      <select name="city" onChange={handleChange} id="city">
      <option defaultChecked  value="all">All</option>
         {uniqueCities.map((item,i) => {
            return(
                <option key={i} value={item}>{item}</option>
            )
         })} 
        
    
      </select>
    </>
  );
}
