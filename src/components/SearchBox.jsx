import React from "react";
import './SearchBox.css';

export default function SearchBox(props) {

   // console.log("props from search ",props)

    const handleSearch = (e) => {
      //  console.log("we search");
        console.log("here change",e.target.value);
        const searchString  = e.target.value;
        if(searchString === "") {
            props.handleUsersRender(props.users);
        //    console.log("Ent",props.users)
            return
        }
        console.log(props)
        const filterdData = props.usersRenderData.filter((item) => {
             return item.name.toLowerCase().startsWith(searchString)
        })
        //console.log(filterdData)
       props.handleUsersRender(filterdData)
    }
    return (
        <>
        <div className="search-container">

            <label htmlFor="searchIn">user search</label>
            <input type="text" id="searchIn" onChange={handleSearch}/>
        </div>
        </>
    )
}