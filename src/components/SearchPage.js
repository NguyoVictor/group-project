import React, { useState } from "react";

// Function for the SearchPage
const SearchPage = () => {
 // State to manage the search query
 const [query, setQuery] = useState('');
 // State to store the search results from API
 const [searchResults, setSearchResults] = useState([]);
 const [loading, setLoading] = useState(false);
 // API key obtained
 const API_KEY = 'd65d099f81mshfb46b6e8c0d8ddfp16ee3bjsnc801f6cbf524';

 // Function to handle the search operation
 const handleSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    // Make a GET request to the API using fetch
    fetch(`https://spotify23.p.rapidapi.com/search?q=${encodeURIComponent(query)}&type=track`, {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'spotify23.p.rapidapi.com',
            'useQueryString': true
        }
    })
    
    .then(response => {
        // Check if the response status is ok
        if(!response.ok) {
            throw new Error('Network responese was not ok');
        }
        // Parse the JSON data from the response
        return response.json();
    })
    .then(data => {
        // Update the state with the search results
        console.log('API Response:', data);
        setSearchResults(data.tracks.items || []);
    })
    .catch(error => {
        // Handle any errors that occur during the fetch operation
        console.error('Error searching:', error);
    })
    .finally(() => {
        setLoading(false);
    });
 };

console.log('Search Results:', searchResults);
 
return (
    <div className="music-result" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        {/* Heading for the search page */}
        <h1>Search Page</h1>
        {/* Form to enter the search query */}
        <form onSubmit={handleSearch}>
            <input 
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search for artists, albums, tracks..."
            />
            <button type="submit">Search</button>
        </form>
        {loading && <p>Loading...</p>}
         {/* Display search results */}
        <div className="music-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {/* Iterate over the search results and render each result */}
        {searchResults.length > 0 ? (
         searchResults.map((result, index) => (
            <div key={index} style={{ backgroundColor: '#f9f9f9', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
                {/* Render each search result */}
                <img src={result.data.albumOfTrack.coverArt.sources[0].url} alt="Album Cover" style={{ width: '100%', height: 'auto' }} />
                <p style={{ margin: '5px 0' }}>Name: {result.data.name}</p>
                <p style={{ margin: '5px 0' }}>Artist: {result.data.artists.items[0].profile.name}</p>
                <p style={{ margin: '5px 0' }}>Album: {result.data.albumOfTrack.name}</p>
            </div>
        )) 
    ):(
        <p>No results found</p>
    )}
     </div>
    </div>
   );
};

export default SearchPage;
