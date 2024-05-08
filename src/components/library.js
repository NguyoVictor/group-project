import React, { useState, useEffect } from 'react';
import { fetchUserLibrary } from './spotifyService';

const Library = () => {
  const [library, setLibrary] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const data = await fetchUserLibrary();
        setLibrary(data.tracks.items);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      }
    };

    fetchLibrary();
  }, []);

  return (
    <div>
      <h2>User Library</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {library.map((track) => (
            <li key={track.id}>{track.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Library;
