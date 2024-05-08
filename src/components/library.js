import React, { useState, useEffect } from "react";

// Function for the LibraryPage
const LibraryPage = () => {
  // State to manage the library songs
  const [librarySongs, setLibrarySongs] = useState([]);
  const [loading, setLoading] = useState(false);
  // API key obtained
  const API_KEY = 'd65d099f81mshfb46b6e8c0d8ddfp16ee3bjsnc801f6cbf524';

  // Function to fetch library songs from the API
  const fetchLibrarySongs = () => {
    setLoading(true);
    // Make a GET request to the API using fetch
    fetch(`https://spotify23.p.rapidapi.com/library`, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
        'useQueryString': true
      }
    })
      .then(response => {
        // Check if the response status is ok
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Parse the JSON data from the response
        return response.json();
      })
      .then(data => {
        // Update the state with the library songs
        console.log('Library Songs:', data);
        setLibrarySongs(data.songs || []);
      })
      .catch(error => {
        // Handle any errors that occur during the fetch operation
        console.error('Error fetching library songs:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Fetch library songs when the component mounts
  useEffect(() => {
    fetchLibrarySongs();
  }, []);

  console.log('Library Songs:', librarySongs);

  return (
    <div className="library-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Times New Roman, serif' }}>
      {/* Heading for the library page */}
      <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Library</h1>
      {loading && <p>Loading...</p>}
      {/* Display library songs */}
      <div className="library-songs" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {/* Iterate over the library songs and render each song */}
        {librarySongs.length > 0 ? (
          librarySongs.map((song, index) => (
            <div key={index} style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
              {/* Render each library song */}
              <img src={song.album.coverArt.sources[0].url} alt="Album Cover" style={{ width: '100%', height: 'auto' }} />
              <p style={{ margin: '5px 0' }}>Name: {song.name}</p>
              <p style={{ margin: '5px 0' }}>Artist: {song.artists.items[0].profile.name}</p>
              <p style={{ margin: '5px 0' }}>Album: {song.album.name}</p>
            </div>
          ))
        ) : (
          <p>No songs in library</p>
        )}
      </div>
    </div>
  );
};

export default LibraryPage;
