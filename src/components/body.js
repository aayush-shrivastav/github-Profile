import { useState, useEffect } from "react";

function GitProfile() {
  const [profile, setProfile] = useState([]);
  const [count, setCount] = useState(20);
  const [search, setSearch] = useState('');
  async function getProfile() {
    try {
      const randomId = Math.floor(Math.random() * 1000 + 1);
      let profileData = await fetch(
        `https://api.github.com/users?since=${randomId}&per_page=${Number(count)}`,
      );
      let data = await profileData.json();
      setProfile([...data]);
    } catch (error) {
      console.log(error);
    }
  }
   
  async function getProfileByName() {
    try {
        let fatchBySearch = await fetch(`https://api.github.com/users/${search}`)
        let data = await fatchBySearch.json();
        console.log(data);
        console.log("profile type",typeof(data));
        setProfile([data]);
    } catch (error) {
        console.log(error); 
    }}

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Random Profile"  value = {count} onChange={(e)=>{setCount(e.target.value)}}/>
        <button onClick={getProfile}>Search</button>

        <input type="text" placeholder="Search Profile by Name" value ={search} onChange = {(e)=>{setSearch(e.target.value)}} />
        <button onClick={getProfileByName}>Search</button>
      </div>

      <div className="profiles-container">
        {profile.map((value) => {
          return (
            <div key={value.id} className="profile">
              <img src={value.avatar_url} alt="profile" />
              <h2>{value.login}</h2>
              <a href={value.html_url} target="_blank" rel="noreferrer">
                View Profile
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GitProfile;
//https://api.github.com/users?since=${randomId}&per_page=1
