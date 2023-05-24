import React, { useState } from "react";
import './SearchBox.css';
import fetchData from "../utils/fetchingDataFunction";
export default function SearchBox(props) {

    const [searchValue, setSearchValue] = useState();
   

    const handleSearch = (e) => {
     
        const searchString  = e.target.value;
        setSearchValue(searchString)
     
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(searchValue === "") {
            props.handleUsersRender(props.users);
            return
        }

        const token = process.env.REACT_APP_API_KEY;
        const headers = {
          Authorization: 'Bearer ' + token,
        };
        const url = `https://api.github.com/users/${searchValue}`
        const data =  await fetchData(url,headers);
        console.log(data)

       
     
       props.handleUsersRender([data])
    }
    return (
        <>
        <div className="search-container">
         <div className="search">
                <form onSubmit={handleSubmit}>

                    <label htmlFor="searchIn">user search</label>
                    <input type="text" id="searchIn" onChange={handleSearch}/>
                    <button type="submit"> Go</button>

                </form>

            </div>

        </div>
        
        </>
    )
}