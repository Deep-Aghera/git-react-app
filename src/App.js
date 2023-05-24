import './App.css';
import CitySelector from './components/CitySelector';
import data from './gitData/data.json'
// import ProfileCard from './components/ProfileCard';
import ProfileList from './components/ProfileList';
import { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';

function App() {
  const [ usersData , setUsersData] = useState();
  const [ usersRenderData, setUsersRenderData] = useState();
  // useEffect( () => {

  //   const getData = async () => {

  //   const url = "https://api.github.com/users";
  //   const token = `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`;
  //   const headers = {
  //     Authorization: 'Bearer '+ token,
  //   };

  //   const response = await fetch(url, {
      
  //     headers: headers,
      
  //   });

  //   const responseData = await response.json();
  //   console.log("here's data ===>",responseData);
  //   return responseData;
      
  //   }
  //   const githubData = getData();

  //  // setUsersData(githubData)
    

   
  //     setUsersData(githubData)
  //     setUsersRenderData(usersData);

    
  //  // console.log(usersData)

  //   return () => {
  //     console.log("unmount")
  //   }
  // },[usersData])

  useEffect(() => {
    const getData = async () => {
      const url = "https://api.github.com/users";
      const token = process.env.REACT_APP_API_KEY;
      const headers = {
        Authorization: 'Bearer ' + token,
      };
  
      const response = await fetch(url, {
        headers: headers,
      });
  
      const responseData = await response.json();
     // console.log("here's data ===>", responseData);
      return responseData;
    };
  
    const fetchData = async () => {
      const githubData = await getData();
      setUsersData(githubData);
      setUsersRenderData(githubData);
    };
    console.log(usersRenderData)
    fetchData();
  
    return () => {
      console.log("forom unmount",usersRenderData)
      console.log("unmount");
    };
  }, []);
  


  return (
    <div className="App">
     <SearchBox handleUsersRender={setUsersRenderData} users={usersData} usersRenderData={usersRenderData}/>
     <br/>
     {usersData? <CitySelector handleUsersRender={setUsersRenderData} users={usersData} usersRenderData={usersRenderData} /> : <p>loading...</p>}
      {usersRenderData ? <ProfileList users={usersRenderData} /> : <p>user Loading..</p> } 

     {/* {data.map((item) => 
     {
      return (<p>{item.name}</p>)
     })} */}
    </div>
  );
}

export default App;
