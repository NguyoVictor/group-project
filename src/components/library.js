import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LibrarySection = () => {
  // State to store the fetched songs
  const [songs, setSongs] = useState([]);

  // Effect hook to fetch songs from the API when the component mounts
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get('https://spotify23.p.rapidapi.com/getSongs', {
          headers: {
            'x-rapidapi-host': 'spotify23.p.rapidapi.com',
            'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY' // Replace with your RapidAPI key
          }
        });
        setSongs(response.data.tracks.items); // Update the songs state with the fetched data
      } catch (error) {
        console.error('Error fetching songs:', error);
      }
    };

    fetchSongs(); // Call the fetchSongs function
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <h2>Library</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            {/* Display song information */}
            <div>
              <strong>{song.name}</strong> - {song.artists.map(artist => artist.name).join(', ')}
            </div>
            <div>Album: {song.album.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LibrarySection;
