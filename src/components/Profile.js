import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    loading: true,
    error: null,
    data: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://spotify23.p.rapidapi.com/user_profile', {
          headers: {
            'X-RapidAPI-Key': 'd65d099f81mshfb46b6e8c0d8ddfp16ee3bjsnc801f6cbf524', 
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
          }
        });
        console.log(response.data); // Log the response data for inspection
        setProfileData({
          loading: false,
          error: null,
          data: response.data,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        setProfileData({
          loading: false,
          error: true,
          data: null,
        });
      }
    };

    fetchData();
  }, []);

  if (profileData.loading) return <div>Loading...</div>;
  if (profileData.error) return <div>Error: {profileData.data?.message || 'An unknown error occurred.'}</div>;

  return (
    <div>
      <h1>{profileData.data?.username}</h1>
      <img src={profileData.data?.profilePicture} alt="music" />
      <ul>
        {profileData.data?.topTracks.map((track, index) => (
          <li key={index}>{track.name} - {track.artist}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
