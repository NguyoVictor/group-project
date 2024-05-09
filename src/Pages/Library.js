
import React, { useState }from 'react';
import { useEffect } from 'react';
import Header from '../components/Header'
import NavBar from '../components/NavBar'
const Library = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch playlists
  const fetchPlaylists = () => {
    setLoading(true);
    setError(null);

    fetch('https://spotify23.p.rapidapi.com/playlists', {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '3509af7823msha08596116c3770ap1b2ab7jsna490778b83c0',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
        'useQueryString': true
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPlaylists(data.playlists || []);
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  // Call fetchPlaylists when component mounts
  useEffect(() => {
    fetchPlaylists();
  }, []);

  return (
    <div className="library">
      <Header/><NavBar/>
            <h2>Library</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {playlists.map(playlist => (
          <li key={playlist.id}>
            <h3>{playlist.name}</h3>
            <p>{playlist.description}</p>
            <p>Owner: {playlist.owner}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;