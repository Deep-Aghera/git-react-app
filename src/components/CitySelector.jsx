import React from "react";

export default function CitySelector(props) {
  const users = props.users;
  const usersRenderData = props.usersRenderData;
  var uniqueCities = [
    "New York",
    "San Francisco",
    "London",
    "Berlin",
    "Toronto",
    "Sydney",
    "Barcelona",
    "Los Angeles",
    "Seattle",
    "Melbourne"
  ];

  const handleChange = async (e) => {
    const selectedCity = e.target.value;

    if (selectedCity === "all") {
      props.handleUsersRender(users);
      return;
    }

    const url = `https://api.github.com/search/users?q=location:${encodeURIComponent(
      selectedCity
    )}`;
    const token = process.env.REACT_APP_API_KEY;
    const headers = {
      Authorization: 'Bearer ' + token,
    };

    const response = await fetch(url, {
      headers: headers,
    });

    const responseData = await response.json();
    const filteredData = responseData.items;
    console.log("filtered data", filteredData);
    props.handleUsersRender(filteredData);
  };

  return (
    <>
      <label htmlFor="cars">Choose a city:</label>
      <select name="city" onChange={handleChange} id="city">
        <option defaultChecked value="all">
          All
        </option>
        {uniqueCities.map((item, i) => {
          return <option key={i} value={item}>{item}</option>;
        })}
      </select>
    </>
  );
}
