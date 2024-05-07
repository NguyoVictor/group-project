import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  // Initialize state for profile data
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://spotify23.p.rapidapi.com/user_profile/', {
          headers: {
            'X-RapidAPI-Key': '92bf5002a5msh5b2d9c21719e1dep1e3e1',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
          }
        });
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  if (!profileData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profileData.username}</h1>
      <img src={profileData.profilePicture} alt="music" />
      <ul>
        {profileData.topTracks.map((track, index) => (
          <li key={index}>{track.name} - {track.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
