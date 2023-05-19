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
  useEffect(() => {
    setTimeout(() => {
      setUsersData(data)
      setUsersRenderData(usersData);

    },500)
   // console.log(usersData)

    return () => {
      console.log("unmount")
    }
  },[usersData])

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
