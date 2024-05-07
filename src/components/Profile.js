import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {

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
  }, []);
    return (  );
}
 
export default Profile;